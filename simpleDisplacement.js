var app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

app.stage.interactive = true;

var container = new PIXI.Container();
app.stage.addChild(container);


var displacementSprite = PIXI.Sprite.fromImage('images/dmaps/2048x2048/ripple_3.jpg');
var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

app.stage.addChild(displacementSprite);

container.filters = [displacementFilter];

displacementSprite.anchor.set(0.5);

var bg = PIXI.Sprite.fromImage('images/img_01.jpg');
bg.width = app.renderer.width;
bg.height = app.renderer.height;

container.addChild(bg);

displacementSprite.scale.x = 2;
displacementSprite.scale.y = 2;

app.stage
    .on('mousemove', onPointerMove)
    .on('touchmove', onPointerMove)
    .on('mouseover', onMouseOver);

function onPointerMove(event) {

    // const x = event.data.global.x;
    // const y = event.data.global.y;
    // displacementSprite.scale.x = Math.atan(x) * 2;
    // displacementSprite.scale.y = Math.atan(y) * 2;

    

    // displacementSprite.position.copy(event.data.global);

    // console.log('X',x)
    // console.log('Y',y)
    // console.log('MATH X',Math.atan(x) * 4)
    // console.log('MATH Y',Math.atan(y) * 4)
    // console.log('MATH Y SUBTRACT',Math.atan(y - displacementSprite.y) * 4)
    // console.log('MATH X SUBTRACT',Math.atan(x - displacementSprite.x) * 4)

    // displacementSprite.position.set(event.data.global.x, event.data.global.y);

    // var mouseX = event.data.global.x;
    // var mouseY = event.data.global.y;   
    // TweenMax.to( displacementSprite, 1, { x: `+=${mouseX}`, y: `+=${mouseY}`  });
}

function onMouseOver(event) {
    // const x = event.data.global.x;
    // const y = event.data.global.y;
    // displacementSprite.scale.x = Math.atan(x) * 2;
    // displacementSprite.scale.y = Math.atan(y) * 2;

    // animateScale();
    // var mouseX = event.data.global.x;
    // var mouseY = event.data.global.y;   
    // TweenMax.to( displacementSprite.scale, 3, { x: `+=${Math.sin( mouseX ) * 100}`, y: `+=${Math.cos( mouseY ) * 100}`  });
    // console.log('X', Math.sin( mouseX ) * 100);
    // console.log('Y', Math.sin( mouseY ) * 100);

}

function animateScale() {
    requestAnimationFrame(animateScale);

    displacementSprite.scale.x += 0.01;
    displacementSprite.scale.y += 0.01;

    
    // renderer.render(stage);
}

var ticker = new PIXI.ticker.Ticker();

ticker.autoStart = true;

ticker.add(function( delta ) {
    
    displacementSprite.x += 10 * delta;
    displacementSprite.y += 3;
    
    app.render( container );

});