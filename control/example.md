
## Planet

``` control
path: loopin/render/example_planet/src/buffer
options:
  - example_earth
  - example_moon
```

``` control
path: loopin/render/example_planet/float/planetSpeed
type: float
min: 1
max: 100000
pow: 3
digits: 5
metric: true
unit: ' x'
```

``` control
path: loopin/render/example_planet/float/planetBlurAmount
type: float
min: 0
max: 10
pow: 3
digits: 3
unit: '%'
```

## Camera

``` control
path: loopin/camera/example_camera
subs:
  zoom:
    type: float
    min: -2
    max: 2
    markers:
      - -1
      - 0
      - 1
    digits: 3

  distance:
    type: float
    min: -1
    max: 4
    markers:
      - 0
      - 1

  fov:
    type: float
    min: 4
    max: 170
    markers:
      - 15
      - 45
      - 90
    digits: 3

  yaw:
    type: float
    min: -120
    max: 120
    unit: deg
    markers:
      - -45
      - 0
      - 45

  pitch:
    type: float
    min: -45
    max: 45
    unit: deg

  roll:
    type: float
    min: -45
    max: 45
    unit: deg
```
