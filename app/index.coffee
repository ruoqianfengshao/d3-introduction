# # require "depend/handlebars"
$ ->
  $.deck(".slide")

  lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
   { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
   { "x": 80,  "y": 5},  { "x": 100, "y": 60}]

  lineFunction = d3.svg.line()
     .x((d) -> d.x )
     .y((d) -> d.y )
     .interpolate("linear")

  svg1 = d3.select("#svg1")
    .attr("width", 200)
    .attr("height", 200)

  svg1.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none")
