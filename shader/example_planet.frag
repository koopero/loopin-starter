#version 150
uniform sampler2D srcSampler;

uniform sampler2D lightmapSampler;

in vec2 srcCoord;
in vec3 lightNormal;

out vec4 outputColour;

uniform float planetBlurAmount = 1.0;
uniform float clockTime;
uniform float clockDelta;

uniform float lightGamma = 0.5;
uniform float lightGain = 1.0;
uniform float lightContrast = 1.0;




void main()
{
  vec2 coord = srcCoord;

  float phase = clockTime;
  phase /= -60;

  phase = fract( phase );
  phase += coord.x;
  coord.x = phase;


  vec4 colour = vec4(0,0,0,0);

  int blurSamples = 32;

  float blurMix = 1.0/float(blurSamples);
  float blurXStep =
    clockDelta
    * planetBlurAmount
    / 60.0
    * blurMix
  ;

  for ( int i = 0; i < blurSamples; i ++ ) {
    colour += texture(srcSampler, coord ) * blurMix;
    coord.x += blurXStep;
  }


  vec2 light = -lightNormal.xy;
  light.x += 1;
  light.x *= 0.5;
  light.y = 0;

  colour.rgb *= mix(
    vec3(1,1,1),
    texture(lightmapSampler, light ).rgb,
    lightContrast
  );


  colour.r = pow( colour.r, lightGamma );
  colour.g = pow( colour.g, lightGamma );
  colour.b = pow( colour.b, lightGamma );

  colour.rgb *= lightGain;

  outputColour = colour;
}
