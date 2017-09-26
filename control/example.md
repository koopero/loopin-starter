Welcome to the [loopin starter project](https://github.com/koopero/loopin-starter)! These are the controls for the example application. This page is interpreted from the file [example.md](/loopin/file/control/example.md).

The following controls will demonstrate a number of Loopin functions as they apply to this example. These controls represent only one third of the project's configuration. See also:

- [preset/example.yaml](/loopin/file/preset/example.yaml) - Rendering configuration.
- [shader/example_planet.vert](/loopin/file/shader/example_planet.vert) - Vertex shader
- [shader/example_planet.frag](/loopin/file/shader/example_planet.frag) - Fragment shader

## Show

`show` is probably the most important operator in Loopin. It is used to choose
which image buffer is to be displayed on the output screen. Here are all the buffers
available in this demo.

``` control
# It is recommended to copy-pasta this
# control to all control pages, with options
# relevant to your application.

path: loopin/show/buffer
options:
  - example_planet
  - example_lightmap
  - example_earth
  - example_moon
  - example_jupiter
```

For very low resolution buffers such as 'example_lightmap', it is useful to be able
to choose the interpolation filter on the displayed buffer.

``` control
path: loopin/show/filter
options:
  - linear
  - nearest
```

## Texture

The `texture` operator lets us choose which planet to display.

``` control
path: loopin/render/example_planet/texture/src/buffer
options:
  - example_earth
  - example_moon
  - example_jupiter
```

## Mesh

The shape of the planet is controlled using the `mesh` operator.

``` control
path: loopin/mesh/example_sphere/sphere
subs:
  rows:
    type: float
    min: 3
    max: 50
    digits: 0
  cols:
    type: float
    min: 3
    max: 50
    digits: 0
```

## Clock

The `clock` operator is used to control the speed of the planet.

``` control
path: loopin/render/example_planet/clock
subs:
  speed:
    type: float
    min: 0.00001157407381
    max: 300
    pow: 3
    digits: 3
    unit: 'rpm'
```

## Camera

`Loopin` implements a quirky, expressive camera system.  `distance` and `fov` work together to create perspective, with `zoom` as an extra parameter. `yaw`, `roll` and `pitch` orbit around the planet.

``` control
path: loopin/camera/example_camera
subs:
  distance:
    type: float
    min: 0
    max: 3

  fov:
    type: float
    min: 30
    max: 170
    unit: °
    digits: 3
    pow: 2.4

  zoom:
    type: float
    min: -2
    max: 2
    markers:
      - -1
      - 0
      - 1
    digits: 3

  yaw:
    type: float
    min: -180
    max: 180
    unit: °

  pitch:
    type: float
    min: -49.5
    max: 49.5
    unit: °

  roll:
    type: float
    min: -49.5
    max: 49.5
    unit: °
```

## Motion Blur

Motion blur is implemented in `example_planet.frag` and controlled here by a single uniform.

``` control
path: loopin/render/example_planet/float/planetBlurAmount
type: float
min: 0
max: 10
pow: 2
digits: 3
unit: '%'
markers:
  - 0.5
  - 1
```

## Lighting

A very simple lighting model is implemented in `example_planet.vert` and `example_planet.frag` and controlled here as a set of uniforms and textures.

First, basic colour controls.

``` control
path: loopin/render/example_planet/float
subs:
  lightContrast:
    type: float
    min: 0.25
    max: 4
    pow: 2

  lightGamma:
    type: float
    min: 0.1
    max: 3

  lightGain:
    type: float
    min: 0.25
    max: 4
    pow: 2
```

`lightPitch` will alter the planet's axial tilt. *Usage may result in unforeseen gravitational anomalies and should not be attempted on Earth. ;)*

``` control
path: loopin/render/example_planet/float
subs:
  lightPitch:
    type: float
    min: -90
    max: 90
    unit: °
```

The lighting model works by using the `texture` 'lightmap' as a 1-dimensional gradient to represent light from back to front of the planet.

 `example_lightmap` is implemented using the `pixels` operator, together with the corresponding control. The sliders below represent RGB values for an 8x1 buffer.

*Unfortunately this control is sketchy on small screens.*

``` control
path: loopin/pixels/example_lightmap/data
type: pixels
cols: 8
rows: 1
channels: rgb
```

The input and output of the  `pixels` operator is just text, so we can edit it directly or paste it into presets.

``` control
path: loopin/pixels/example_lightmap/data
type: text
size: 30
```

Finally, we can change the configuration of the `texture` itself. By setting the texture's buffer to 'white', we effectively disable the lightmap. Setting the filter to `nearest` will make the lighting even more cartoony.

``` control
path: loopin/render/example_planet/texture/lightmap
subs:
  buffer:
    options:
      - white
      - example_lightmap
  filter:
    options:
      - linear
      - nearest
```
