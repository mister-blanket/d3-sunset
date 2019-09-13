//import { select } from 'd3';

const svg = d3.select('svg');

// TIME
const day = 3300;
const set = 3300;
const eve = 6600;

svg
  .style('background-color', '#c0e3ff')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .style('background-color', '#cfafab')
  .transition()
    .duration(eve)
    .style('background-color', '#1c1b5c');

const height = +svg.attr('height');
const width = +svg.attr('width');
const foothillsYBase = 540;
const midrangeHillsBase = 400;
const farHillsBase = 330;
const horizonBase = 310;

// HEAD
const g = svg
  .append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`);

// STARS
for (let i = 0; i < 200; i++) {
  let starPosition = [(Math.random()*600),(Math.random()*220)];
  let star = svg
    .append('circle')
      .attr('r', Math.random())
      .attr('cx', starPosition[0])
      .attr('cy', starPosition[1])
      .attr('fill', '#ddd')
      .attr('fill-opacity', 0)
    .transition()
      .duration(10000)
    .transition()
      .duration(16000)
      .attr('fill-opacity', 1);
};
for (let i = 0; i < 400; i++) {
  let starPosition = [(Math.random()*600),(Math.random()*300)];
  let star = svg
    .append('circle')
      .attr('r', Math.random())
      .attr('cx', starPosition[0])
      .attr('cy', starPosition[1])
      .attr('fill', '#ddd')
      .attr('fill-opacity', 0)
    .transition()
      .duration(10000)
    .transition()
      .duration(16000)
      .attr('fill-opacity', 1);
};

const sun = svg
  .append('circle')
    .attr('r', 30)
    .attr('cx', 400)
    .attr('cy', -30)
    .attr('fill', 'yellow')
  .transition()
    .duration(11000)
    .attr('r', 40)
    .attr('cx', 300)
    .attr('cy', 350)
    .attr('fill', 'orange')

const horizon = svg
  .append('path')
    .attr('d',
      `M-80 ${horizonBase}
      L200 ${horizonBase-10}
      L550 ${horizonBase-5}
      L600 ${horizonBase}
      L691 ${horizonBase+300}
      L-30 ${horizonBase+300}`)
    .attr('fill', '#9bb2b8')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#bfa0b6')
  .transition()
    .duration(eve)
    .attr('fill', '#2f2e4a');

const farHills = svg
  .append('path')
    .attr('d',
      `M-80 ${farHillsBase}
      L200 ${farHillsBase+10}
      L450 ${farHillsBase-20}
      L600 ${farHillsBase+30}
      L691 ${farHillsBase+300}
      L-30 ${farHillsBase+300}`)
    .attr('fill', '#a5b0b5')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#bd9991')
  .transition()
    .duration(eve)
    .attr('fill', '#3a3a5e');

const midrangeHills = svg
  .append('path')
    .attr('d',
      `M-80 ${midrangeHillsBase}
      L120 ${midrangeHillsBase+10}
      L250 ${midrangeHillsBase-20}
      L470 ${midrangeHillsBase+40}
      L690 ${midrangeHillsBase+30}
      L691 ${midrangeHillsBase+300}
      L-30 ${midrangeHillsBase+300}`)
    .attr('fill', '#c1c9b9')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#b0b0ac')
  .transition()
    .duration(eve)
    .attr('fill', '#4a4975');

const foothills = svg
  .append('path')
    .attr('d',
      `M-80 ${foothillsYBase}
      L90 ${foothillsYBase-80}
      L200 ${foothillsYBase-20}
      L350 ${foothillsYBase-60}
      L560 ${foothillsYBase+20}
      L690 ${foothillsYBase-100}
      L691 ${foothillsYBase+300}
      L-30 ${foothillsYBase+300}`)
    .attr('fill', '#d5dbb8')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#b0a7a4')
  .transition()
    .duration(eve)
    .attr('fill', '#656294');
