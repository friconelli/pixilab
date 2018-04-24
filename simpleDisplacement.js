var app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

app.stage.interactive = true;

var container = new PIXI.Container();
app.stage.addChild(container);


var displacementSprite = PIXI.Sprite.fromImage('images/dmaps/2048x2048/fibers.jpg');
var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);


displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

app.stage.addChild(displacementSprite);

container.filters = [displacementFilter];

let colorMatrix = new PIXI.filters.ColorMatrixFilter();
container.filters = [colorMatrix];
colorMatrix.lsd(true);

console.log(container.filters)

displacementSprite.anchor.set(0.5);
displacementSprite.x = 0;
displacementSprite.y = 0; 

var bg = PIXI.Sprite.fromImage('images/img_01.jpg');
// bg.width = app.renderer.width;
// bg.height = app.renderer.height;
bg.anchor.set(0.5);
bg.x = app.renderer.width / 2;
bg.y = app.renderer.height / 2; 
// bg.scale.x = 2.2;
// bg.scale.y = 2.2;
// bg.autoFit = true

container.addChild(bg);

// displacementSprite.scale.x = 2;
// displacementSprite.scale.y = 2;

app.stage
    // .on('mousemove', onPointerMove)
    // .on('touchmove', onPointerMove)
    .on('mouseover', onMouseOver);

let speed, dt, dd;

function onPointerMove(event) {

    // const x = event.data.global.x;
    // const y = event.data.global.y;
    // displacementSprite.scale.x = Math.atan(x) * 2;
    // displacementSprite.scale.y = Math.atan(y) * 2;

    speed = 0.02;

    dt = speed; // fixed step
    // dt = 1.0 - Math.exp(1.0 - dt, delta); // if you have a delta time in frame.

    const position = displacementSprite.position;
    const target = app.renderer.plugins.interaction.mouse.global;

    if (Math.abs(position.x - target.x) + Math.abs(position.y -target.y) < 1) {
        position.copy(target);
    }
    else
    {
        position.x = position.x + (target.x - position.x) * dt;
        position.y = position.y + (target.y - position.y) * dt;
    }



    

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
    // console.log(delta)
    
    // displacementSprite.x += 5 / delta;
    // displacementSprite.y += 5;
    // displacementSprite.scale.x += 3 / delta;
    // displacementSprite.scale.y += 3 / delta;
    // bg.rotation += 0.0005
    
    app.render( container );

});