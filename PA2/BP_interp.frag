# version 120

uniform vec3 ambientProduct;
uniform vec3 diffuseProduct;
uniform vec3 specularProduct;

uniform float shininess;

uniform vec4 lightPosition;

varying vec3 N, E;

void main()
{
    vec4 col;

    vec3 L = normalize(lightPosition.xyz);
    vec3 N2 = normalize (N);
    vec3 E2 = normalize (E);
    vec3 H = normalize( L + E2 );

    vec4 ambient = vec4(ambientProduct, 1.0);
    vec4 diffuse = vec4(diffuseProduct, 1.0) * max( dot(L, N2), 0.0 );
    vec4 specular = vec4(specularProduct, 1.0) * pow( max(dot(N2, H), 0.0), shininess );

    col = ambient + diffuse +specular;
    col.a = 1.0;

    gl_FragColor = col;
}

