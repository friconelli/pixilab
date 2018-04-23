var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.view);

// Stage
var stage = new PIXI.Container();

// // Container
// stage.addChild(container);

// // Background
// var bg = PIXI.Sprite.fromImage("https://picsum.photos/1920/1080");
// container.addChild(bg);

// // Filter
// var displacementTexture = PIXI.Texture.fromImage("http://i.imgur.com/2yYayZk.png");
// var displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

// // Apply it
// container.filters = [displacementFilter];

// // Animate
// requestAnimationFrame(animate);

// function animate() {
//     var offset = 0.1;
    
//     // if(id==1) offset = 1;
//     // else if(id==2) offset = 5;

//     displacementFilter.scale.x += offset;
//     displacementFilter.scale.y += offset;

//     renderer.render(stage);
//     requestAnimationFrame(animate);
// }

var texture = PIXI.Texture.fromImage('images/img_01.jpg');
var background = new PIXI.Sprite(texture);

var displacementSprite = PIXI.Sprite.fromImage('images/dmaps/2048x2048/ripple_3.jpg');
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

// displacementSprite.scale.x = 1;
// displacementSprite.scale.y = 1;

displacementSprite.anchor.set(0.5);
displacementSprite.x = 0;
displacementSprite.y = 0;

// stage.addChild(displacementSprite);
stage.addChild(background);

// stage.filters = [displacementFilter];

renderer.render(stage);

// animate();

// function animate() {
//     requestAnimationFrame(animate);

//     displacementSprite.x += 3;
//     displacementSprite.y += 3;

    
//     renderer.render(stage);
// }

// function onPointerMove(event) {
//     // const x = event.data.global.x;
//     // const y = event.data.global.y;
//     // displacementFilter.scale.x = Math.atan(x)*4;
//     // displacementFilter.scale.y = Math.atan(y)*4;

//     displacementSprite.position.set(event.data.global.x - 25, event.data.global.y);
   
//     // brush.position.copy(event.data.global);
//     // if (dragging) snap(event);
// }

// stage.interactive = true;
// stage.on('pointermove', onPointerMove);