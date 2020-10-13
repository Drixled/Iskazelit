var text = new Blotter.Text("YES, KAZE SO LIT", {
  family: "'Exo 2', sans-serif",
  weight: 900,
  size : 80,
  fill: "#e1e1e1",
  paddingLeft : 60,
  paddingRight : 60
});

var material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.1;
material.uniforms.uVolatility.value = 0.075;

var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("distortion-text");
var scope = blotter.forText(text);

scope.appendTo(elem);