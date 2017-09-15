#version 150
/*
  This is a copy of ofxLoopin's default GLSL vertex shader.

  To create your own shader, duplicate this file within the
  'shader/' directory with the extension '.vert'
*/

/*


*/
uniform mat4 modelViewProjectionMatrix;

in vec4 position;
in vec2 texcoord;
in vec4 color;
in vec4 normal;


out vec2 srcCoord;
out vec4 vertColour;

/*
  Texture
  Since the default texture is named `src`, this is used as the prefix.
*/
uniform sampler2D srcSampler; // GLSL Sampler
uniform mat4 srcMatrix;
uniform int srcWidth;   // Pixel width of the texture's buffer.
uniform int srcHeight; //  Pixel height of the texture's buffer.
uniform int srcCols;  // `cols` metadata from the texture's buffer.
uniform int srcRows; //  `rows` metadata from the texture's buffer.

/*
  Clock
  see: https://loopin.tech/ofxLoopin-clock.html
*/
uniform int clockGlobalIndex;
uniform float clockGlobalTime;
uniform float clockGlobalDelta;

/*

*/
uniform int passIndex;
uniform int passTotal;
uniform float passDensity;
uniform float passX;


uniform float bufferAspect;
uniform int bufferWidth;
uniform int bufferHeight;
uniform int bufferRows;
uniform int bufferCols;

uniform float meshAspect;
uniform int meshCount;
uniform int meshRows;
uniform int meshCols;

uniform float pointSize;
uniform float pointDensity;

void main()
{
    srcCoord = vec2(texcoord.x, texcoord.y);
    srcCoord = (srcMatrix*vec4(srcCoord.x,srcCoord.y,0,1)).xy;

    vertColour = vec4(1,1,1,1);

    gl_Position = modelViewProjectionMatrix * position;
}
