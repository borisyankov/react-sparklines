# react-sparklines
Beautiful and expressive sparklines component for React

## Install

```
npm install react-sparklines --save
```

## Run demo

```
npm install
npm start
http://localhost:8080
```


## Use

```
<Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
</Sparklines>
```

Sparklines component is a container with the following properties:

data - the data set used to build the sparkline

limit - optional, how many data points to display at once

width, height - dimensions of the component

margin - optional, offset the chart


#### Basic Sparkline
```
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
```

#### Bars
```
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesBars />
</Sparklines>
```

#### Spots
```
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }} />
    <SparklinesSpots />
</Sparklines>
```

#### Reference Line
```
<Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="mean" />
</Sparklines>
```

#### Normal Band
```
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }}/>
    <SparklinesNormalBand />
</Sparklines>
```
