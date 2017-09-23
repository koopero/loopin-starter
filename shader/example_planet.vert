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
out vec3 lightNormal;

uniform float clockTime;
uniform float lightPitch = 90.0;

/*
  There's lots of copy pasta in GLSL.
  This was ganked from https://gist.github.com/yiwenl/3f804e80d0930e34a0b33359259b556c
*/
vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}
const float PI = 3.1415;

uniform float planetSpeed = 50000.0;

void main()
{
    srcCoord = texcoord.xy;


    vec4 pos = position;
    // pos.xz = rotate( pos.xz,
    //   clockTime
    //   * planetSpeed
    //   / 60.0
    //   * 3.1415926
    //   * 2.0
    // );

	lightNormal = normal.xyz;
    // lightNormal.xz = rotate( lightNormal.xz,
    //   clockTime
    //   * planetSpeed
    //   / 60.0
    //   * 3.1415926
    //   * 2.0
    // );

  float phase = clockTime;
  phase *= planetSpeed;
  phase /= 60;
	phase /= 365;
  phase = fract( phase );

  	lightNormal.xy = rotate( lightNormal.xy,
			( lightPitch + cos( phase * PI * 2.0 ) * 23 )
			/ 180.0 * PI
		);


    gl_Position = modelViewProjectionMatrix * pos;
}
