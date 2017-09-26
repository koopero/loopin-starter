#version 150
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
uniform float planetSpeed = 1.0;

void main()
{
  srcCoord = texcoord.xy;

  vec4 pos = position;
  gl_Position = modelViewProjectionMatrix * pos;

	// Calculate axial tilt
	lightNormal = normal.xyz;
  float phase = clockTime;
  phase /= 60;
	phase /= 365;
  phase = fract( phase );

	lightNormal.xy = rotate( lightNormal.xy,
		( lightPitch + cos( phase * PI * 2.0 ) * 23 )
		/ 180.0 * PI
	);

}
