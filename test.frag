// ==============circle

#ifdef  GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

// float circleshape(vec2 position, float radius) {
//     return step(radius, length(position - vec2(0.5)));
// }

// void main() {
//     vec2 position = gl_FragCoord.xy / u_resolution;

//     vec3 color = vec3(1.0, 0.0, 0.8667);


//     float circle = circleshape(position, .1);
//     color = vec3(circle);

//     gl_FragColor = vec4(color, 0.2);

// }


// ==============polygon

// const float PI = 3.14159265359;

// float polygonshape(vec2 position, float radius, float sides) {
//     position = position * 2.0 - 1.0;
//     float angle = atan(position.x, position.y);
//     float slice = PI * 2.0 / sides;

//     return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
// }

// void main(){
//     vec2 position = gl_FragCoord.xy / u_resolution;

//     vec3 color = vec3(0.0);

//     float polygon = polygonshape(position, 0.6, 6.0);

//     color = vec3(polygon);

//     gl_FragColor = vec4(color, 1.0);
// }




// ==============translate

// float circleshape(vec2 position, float radius){
//     return step(radius, length(position - vec2(0.5)));
// }

// void main(){
//     vec2 coord = gl_FragCoord.xy / u_resolution;
//     vec3 color = vec3(0.0);

//     vec2 translate = vec2(0.0, 0.0);
//     coord += translate;

//     color += vec3(circleshape(coord, 0.3));

//     gl_FragColor = vec4(color, 1.3);
// }




// ============== sin & cos

// uniform float u_time;

// float circleshape(vec2 position, float radius){
//     return step(radius, length(position - vec2(0.5)));
// }

// void main(){
//     vec2 coord = gl_FragCoord.xy / u_resolution;
//     vec3 color = vec3(0.0);

//     vec2 translate = vec2(sin(u_time / 20.0), cos(u_time));
//     coord += translate;

//     color += vec3(circleshape(coord, 0.3));

//     gl_FragColor = vec4(color, 1.3);
// }



// ============== scale

// mat2 scale(vec2 scale){
//     return mat2(scale.x, 0.0, 0.0, scale.y);
// }

// uniform float u_time;

// float circleshape(vec2 position, float radius){
//     return step(radius, length(position - vec2(0.5)));
// }

// void main(){
//     vec2 coord = gl_FragCoord.xy / u_resolution;
//     vec3 color = vec3(0.2706, 0.5686, 0.7412);

//     vec2 translate = vec2(0.0, 0.0);
//     coord += translate;

//     coord = scale(vec2(sin(u_time) + 2.0)) * coord;

//     color += vec3(circleshape(coord, 0.3));

//     gl_FragColor = vec4(color, 1.3);
// }




// ============== warp grid

// uniform float u_time;

// void main(){
//     vec2 coord = gl_FragCoord.xy / u_resolution;
//     vec3 color = vec3(0.0, 0.0, 0.0);

//     color += sin(coord.x * cos(u_time / 30.0) * 60.0) + sin(coord.y * cos(u_time / 2.0) * 5.0);
//     color += sin(coord.x * cos(u_time / 20.0) * 60.0) + -cos(coord.y * cos(u_time / 4.0) * 20.0);

//     gl_FragColor = vec4(color, 1.0);
// }



// ============== water 1
// 1)

// uniform float u_time;

// void main(){
//     vec2 coord = 6.0 * gl_FragCoord.xy / u_resolution;

//     for(int n = 1; n < 8; n++) {
//         float i = float(n);
//         coord += vec2(.7 / i * sin(i * coord.y + u_time + .3 * i) + .8, .4 / i * sin(coord.x + u_time + .3 * i) + 1.6);
//     }

//     // coord += vec2(.7 / sin(coord.y + u_time + .3) + .8, .4 / sin(coord.x + u_time + .3) + 1.6);

//     vec3 color = vec3(.5 * sin(coord.x) + .5, .5 * sin(coord.y) + .5, sin(coord.x + coord.y));

//     gl_FragColor = vec4(color, 1.0);
// }


// 2)
// uniform float u_time;

// void main(){
//     vec2 coord = 10.0 * gl_FragCoord.xy / u_resolution;

//     for(int n = 1; n < 4; n++) {
//         float i = float(n);
//         coord += vec2(.7 / i * sin(i * coord.y + u_time + .3 * i) + .8, .4 / i * sin(coord.x + u_time + .10 * i) + 1.6);

//         coord += vec2(.1 * i / i * -sin(coord.y + u_time + .10 * i) + .8, .4 / sin(coord.x - u_time + .4 / i) + 1.6 / i);
//     }

//     vec3 color = vec3(.5 * sin(coord.x) + .5, .5 * sin(coord.y) + .5, sin(coord.x + coord.y));

//     gl_FragColor = vec4(color, 1.0);
// }


// ============== water 2
// 1)

// uniform float u_time;

// const int AMOUNT = 4;

// void main(){
//     vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);

//     float len;

//     for(int i = 0; i < AMOUNT; i++){
//         len = length(vec2(coord.x, coord.y));

//         coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
//         coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 12.0);
//     }

//     gl_FragColor = vec4(cos(len), cos(len), cos(len), 1.0);
// }

// 2)

uniform float u_time;

const int AMOUNT = 4;
void main(){
    vec2 coord = 10.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);

    float len;

    for(int i = 0; i < AMOUNT; i++){
        len = length(vec2(coord.x, coord.y));

        coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 12.0);
    }

    gl_FragColor = vec4(cos(len * 3.4), cos(len * 2.2), cos(len * 1.1), 1.0);
}