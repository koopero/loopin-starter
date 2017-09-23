#version 150
uniform sampler2D srcSampler;

uniform sampler2D lightmapSampler;

in vec2 srcCoord;
in vec3 lightNormal;

out vec4 outputColour;

uniform float planetSpeed = 50000.0;
uniform float planetBlurAmount = 1.0;
uniform float clockTime;
uniform float clockDelta;
uniform float lightGamma = 0.5;
uniform float lightGain = 1.0;



void main()
{
  vec2 coord = srcCoord;

  float phase = clockTime;
  phase *= planetSpeed;
  phase /= 60;

  phase = fract( phase );
  phase += coord.x;
  coord.x = phase;


  vec4 colour = vec4(0,0,0,0);

  int blurSamples = 32;

  float blurMix = 1.0/float(blurSamples);
  vec2 blurDisplace = vec2(
      1.0/60.0
      * planetBlurAmount
      * planetSpeed
      / 60.0
      , 0
    ) * blurMix;

  for ( int i = 0; i < blurSamples; i ++ ) {
    colour += texture(srcSampler, coord + blurDisplace * float(i) ) * blurMix;
  }


  vec2 light = -lightNormal.xy;
  light.x += 1;
  light.x *= 0.5;
  light.y = 0;

  colour *= texture(lightmapSampler, light );

  colour.r = pow( colour.r, lightGamma );
  colour.g = pow( colour.g, lightGamma );
  colour.b = pow( colour.b, lightGamma );
  // colour.r = light.x;

  colour.rgb *= lightGain;

  outputColour = colour;
}
