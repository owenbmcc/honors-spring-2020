export class Text {
	constructor(font) {
		textGeo = new THREE.TextGeometry( text, {
			font: font,
			size: size,
			height: height,
			curveSegments: curveSegments,
			bevelThickness: bevelThickness,
			bevelSize: bevelSize,
			bevelEnabled: bevelEnabled
		} );
	}
}