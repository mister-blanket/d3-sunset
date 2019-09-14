//import { select } from 'd3';

const svg = d3.select('svg');

// TIME
const day = 3300;
const set = 3300;
const eve = 6600;

svg
  .style('background-color', '#bfdfff')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .style('background-color', '#cfafab')
  .transition()
    .duration(eve)
    .style('background-color', '#302659');

const height = +svg.style("height").slice(0,-2); // 800
const width = +svg.style("width").slice(0,-2); // 600
const foothillsYBase = height*(7.5/12);
const midrangeHillsBase = height*(5.5/12);
const farHillsBase = height*(4.5/12);
const horizonBase = height*(4/12);

console.log(horizonBase+50);

// STARS
for (let i = 0; i < width/4; i++) {
  let starPosition = [(Math.random()*width),(Math.random()*(horizonBase-(height*1/12)))];
  let star = svg
    .append('circle')
      .attr('r', Math.random())
      .attr('cx', starPosition[0])
      .attr('cy', starPosition[1])
      .attr('fill', '#ddd')
      .attr('fill-opacity', 0)
    .transition()
      .duration(8000)
    .transition()
      .duration(15000)
      .attr('fill-opacity', 0.8);
};
for (let i = 0; i < width; i++) {
  let starPosition = [(Math.random()*width),(Math.random()*(horizonBase+(height*1/12)))];
  let star = svg
    .append('circle')
      .attr('r', Math.random())
      .attr('cx', starPosition[0])
      .attr('cy', starPosition[1])
      .attr('fill', '#ddd')
      .attr('fill-opacity', 0)
    .transition()
      .duration(8000)
    .transition()
      .duration(15000)
      .attr('fill-opacity', 0.5);
};

const sun = svg
  .append('circle')
    .attr('r', 30)
    .attr('cx', width*(3/5))
    .attr('cy', -30)
    .attr('fill', 'yellow')
  .transition()
    .duration(11000)
    .attr('r', 40)
    .attr('cx', width*(2/5))
    .attr('cy', (horizonBase+(height*1/12)+30))
    .attr('fill', 'orange')

const horizon = svg
  .append('path')
    .attr('d',
      `M0 ${horizonBase}
      L${width*(1/8)} ${horizonBase-10}
      L${width*(3/4)} ${horizonBase+5}
      L${width} ${horizonBase-5}
      L${width} ${height}
      L0 ${height}`)
    .attr('fill', '#92a6ab')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#99868f')
  .transition()
    .duration(eve)
    .attr('fill', '#34324d');

const farHills = svg
  .append('path')
    .attr('d',
      `M0 ${farHillsBase}
      L${width*(2/7)} ${farHillsBase+10}
      L${width*(5/8)} ${farHillsBase-15}
      L${width} ${farHillsBase+30}
      L${width} ${height}
      L0 ${height}`)
    .attr('fill', '#a5b0b5')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#b89890')
  .transition()
    .duration(eve)
    .attr('fill', '#3a3a5e');

const midrangeHills = svg
  .append('path')
    .attr('d',
      `M0 ${midrangeHillsBase}
      L${width*(1/8)} ${midrangeHillsBase+10}
      L${width*(3/7)} ${midrangeHillsBase-20}
      L${width*(5/6)} ${midrangeHillsBase+40}
      L${width} ${midrangeHillsBase+30}
      L${width} ${height}
      L0 ${height}`)
    .attr('fill', '#c1c9b9')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#b0a7a4')
  .transition()
    .duration(eve)
    .attr('fill', '#4a4975');

const foothills = svg
  .append('path')
    .attr('d',
      `M0 ${foothillsYBase}
      L${width*(1/6)} ${foothillsYBase-70}
      L${width*(2/6)} ${foothillsYBase-20}
      L${width*(3/6)} ${foothillsYBase-60}
      L${width*(5/6)} ${foothillsYBase+20}
      L${width} ${foothillsYBase-50}
      L${width} ${height}
      L0 ${height}`)
    .attr('fill', '#d5dbb8')
  .transition()
    .duration(day)
  .transition()
    .duration(set)
    .attr('fill', '#b0b0ac')
  .transition()
    .duration(eve)
    .attr('fill', '#605d8a');
