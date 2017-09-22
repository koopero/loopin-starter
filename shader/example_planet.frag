#version 150
uniform sampler2D srcSampler;

uniform sampler2D lightmapSampler;

in vec2 srcCoord;
in vec3 lightNormal;

out vec4 outputColour;

uniform float planetSpeed = 50000.0;
uniform float planetBlurAmount = 1.0;
uniform float clockDelta;


void main()
{
  vec2 coord = srcCoord;

  vec4 colour = vec4(0,0,0,0);

  int blurSamples = 32;
  float blurMix = 1.0/float(blurSamples);
  vec2 blurDisplace = vec2(
      clockDelta
      * planetBlurAmount
      * planetSpeed
      / 60.0
      , 0
    ) * blurMix;

  for ( int i = 0; i < blurSamples; i ++ ) {
    colour += texture(srcSampler, srcCoord + blurDisplace * float(i) ) * blurMix;
  }


  vec2 light = -lightNormal.xy;
  light.x += 1;
  light.x *= 0.5;
  light.y = 0;

  colour *= texture(lightmapSampler, light );

  outputColour = colour;
}
