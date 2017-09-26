#version 150

in vec2 srcCoord;
out vec4 outputColour;

// Custom input from example_planet.vert
in vec3 lightNormal;

// Clock uniforms supplied by ofxLoopin
uniform float clockTime;
uniform float clockDelta;

// Custom uniforms unique to this shader.
uniform sampler2D srcSampler;
uniform sampler2D lightmapSampler;
uniform float planetBlurAmount = 1.0;
uniform float lightGamma = 0.5;
uniform float lightGain = 1.0;
uniform float lightContrast = 1.0;


void main()
{
  vec2 coord = srcCoord;

  // Compute the phase of the planet and add it to coord.x
  float phase = clockTime;
  phase /= -60;
  phase = fract( phase );
  coord.x += phase;

  // Create motion blur by sampling srcSampler many times
  // and averaging results.
  int blurSamples = 32;
  vec4 colour = vec4(0,0,0,0);
  float blurMix = 1.0/float(blurSamples);
  float blurXStep = clockDelta * planetBlurAmount / 60.0 * blurMix;
  for ( int i = 0; i < blurSamples; i ++ ) {
    colour += texture(srcSampler, coord ) * blurMix;
    coord.x += blurXStep;
  }

  // Get lightmap coordinate from normal
  vec2 light = -lightNormal.xy;
  light.x += 1;
  light.x *= 0.5;
  light.y = 0;

  // Get lightmap sample and apply lightContrast
  colour.rgb *= mix(
    vec3(1,1,1),
    texture(lightmapSampler, light ).rgb,
    lightContrast
  );

  // Apply lightGamma
  colour.r = pow( colour.r, lightGamma );
  colour.g = pow( colour.g, lightGamma );
  colour.b = pow( colour.b, lightGamma );

  // Apply lightGain
  colour.rgb *= lightGain;

  outputColour = colour;
}
