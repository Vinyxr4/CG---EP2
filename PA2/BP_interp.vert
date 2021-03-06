# version 120

attribute vec3 position;
attribute vec3 vNormal;

uniform mat4 modelToWorld;
uniform mat4 worldToCamera;
uniform mat4 cameraToView;

varying vec3 N, E;

void main() {
    mat4 chain = cameraToView * worldToCamera * modelToWorld;

    vec3 pos = vec4 (chain * vec4(position, 1.0)).xyz;

    E = normalize( pos );
    N = normalize(vec4 (chain * vec4(vNormal, 1.0))).xyz;

    gl_Position = chain * vec4(position, 1.0);
}
