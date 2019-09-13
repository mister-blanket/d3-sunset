//import { select } from 'd3';

const svg = d3.select('svg');

const height = +svg.attr('height');
const width = +svg.attr('width');
const eyeRadius = 45;
const eyeSpacing = 100;
const eyeYOffset = -5;
const eyebrowYOffset = -70;
const eyebrowWidth = 55;
const eyebrowHeight = 15;

// HEAD
const g = svg
  .append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`);

const circle = g
  .append('circle')
    .attr('r', 200)
    .attr('fill', '#9999ff')
    .attr('stroke', 'black')
    .attr('stroke-width', 20);

// EYES
const eyesG = g
  .append('g')
    .attr('transform', `translate(0,${eyeYOffset})`);

const leftEye = eyesG
  .append('circle')
    .attr('r', eyeRadius)
    .attr('cx', - eyeSpacing)
  .transition()
    .duration(7000)
  .transition()
    .duration(5000)
    .attr('r', `${eyeRadius + 5}`)
  .transition()
    .duration(2000)
  .transition()
    .duration(3000)
    .attr('r', `${eyeRadius - 10}`);

const rightEye = eyesG
  .append('circle')
    .attr('r', eyeRadius)
    .attr('cx', + eyeSpacing)
  .transition()
    .duration(7000)
  .transition()
    .duration(5000)
    .attr('r', `${eyeRadius + 5}`)
  .transition()
    .duration(2000)
  .transition()
    .duration(3000)
    .attr('r', `${eyeRadius - 10}`);

// EYEBROWS
const eyebrowsG = eyesG
  .append('g')
    .attr('transform', `translate(0,${eyebrowYOffset})`)

eyebrowsG
  .transition()
    .duration(4000)
    .attr('transform', `translate(0,${eyebrowYOffset -20 })`)
  .transition()
    .duration(3000)
  .transition()
    .duration(5000)
    .attr('transform', `translate(0,${eyebrowYOffset})`)

const leftEyebrow = eyebrowsG
  .append('rect')
    .attr('x', -eyeSpacing -eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
  .transition()
    .duration(7000)
  .transition()
    .duration(5000)
    .attr('x', -eyeSpacing -eyebrowWidth / 2 + 10)
  .transition()
    .duration(2000)
  .transition()
    .duration(3000)
    .attr('y', + 15)
    .attr('x', -eyeSpacing -eyebrowWidth / 2 + 20)

const rightEyebrow = eyebrowsG
  .append('rect')
    .attr('x', +eyeSpacing -eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
  .transition()
    .duration(7000)
    //.attr('y', - 20)
  .transition()
    .duration(5000)
    .attr('x', +eyeSpacing -eyebrowWidth / 2 - 10)
  .transition()
    .duration(2000)
  .transition()
    .duration(3000)
    .attr('y', - 20)
    .attr('x', +eyeSpacing -eyebrowWidth / 2 - 20)


// MOUTH
const mouth = g
  .append('path')
    .attr('d', d3.arc()({
      innerRadius: 150,
      outerRadius: 170,
      startAngle: 3,
      endAngle: 3.4
    }))
  .transition()
    .duration(4000)
    .attr('d', d3.arc()({
      innerRadius: 150,
      outerRadius: 170,
      startAngle: 3,
      endAngle: 4.1
    }))
  .transition()
    .duration(3000)
  .transition()
    .duration(5000)
    .attr('d', d3.arc()({
      innerRadius: 150,
      outerRadius: 170,
      startAngle: 3,
      endAngle: 3.15
    }))
