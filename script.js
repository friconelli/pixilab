var renderer = new PIXI.autoDetectRenderer();
var stage = new PIXI.Container();
var slidesContainer = new PIXI.Container();
var displacementSprite = new PIXI.Sprite.fromImage(displacementImage);
var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

// Add canvas to HTML
document.body.appendChild(renderer.view);
// Add child container to stage
stage.addChild(slidesContainer);
// Set the filter to stage
stage.filters = [displacementFilter];

// we load the sprites to the slides container and position them at the center of the stage
// the sprites array is passed to our component upon its initialization
// if our slide has text, we add it as child to the image and center it
function loadPixiSprites(sprites) {
    for (var i = 0; i < sprites.length; i++) {

        var texture = new PIXI.Texture.fromImage(sprites[i]);
        var image = new PIXI.Sprite(texture);
        if (texts) {
            // base style for our text
            var textStyle = new PIXI.TextStyle({
                fill: '#ffffff',
                wordWrap: true,
                wordWrapWidth: 400
            });

            var text = new PIXI.Text(texts[i], textStyle);
            image.addChild(text);

            // center each to text to the image
            text.anchor.set(0.5);
            text.x = image.width / 2;
            text.y = image.height / 2;
        }

        image.anchor.set(0.5);
        image.x = renderer.width / 2;
        image.y = renderer.height / 2;

        slidesContainer.addChild(image);
    }
}

// we listen at each navigation element click and call the move slider function
// passing it the index we want to go to
var currentIndex = 0;
var slidesImages = slidesContainer.children;
var isPlaying = false;

for (var i = 0; i < nav.length; i++) {

    var navItem = nav[i];

    navItem.onclick = function(event) {

        if (isPlaying) {
            return false;
        }

        if (this.getAttribute('data-nav') === 'next') {

            if (that.currentIndex >= 0 && that.currentIndex < slideImages.length -1) {
                moveSlider(currentIndex + 1);
            } else {
                moveSlider(0);
            }
        } else {

            if (that.currentIndex > 0 && that.currentIndex < slidesImages.length) {
                moveSlider(currentIndex - 1);
            } else {
                moveSlider(spriteImages.length - 1);
            }
        }

        return false;
    }
}

// our transition between the slides
// on our timeline we set the alpha property of the relevant slide to 0 or 1
// and scale out filter on the x & y axis accordingly
function moveSlider(newIndex) {

    isPlaying = true;

    var baseTimeline = new TimelineMax({
        onComplete: function() {
            that.currentIndex = newIndex;
            isPlaying = false;
        }
    });

    baseTimeline
        .to(displacementFilter.scale, 1, { x: 200, y: 200 })
        .to(slidesImages[that.currentIndex], 0.5, { alpha: 0 })
        .to(slidesImages[newIndex], 0.5, { alpha: 1 })
        .to(displacementFilter.scale, 1, { x: 20, y: 20 });
}

// use pixi's ticker class to render our scene
// similar to requestAnimationFrame
var ticker = new PIXI.ticker.Ticker();
ticker.add(function(delta) {

    // optionally have a default animation
    displacementSprite.x += 10 * delta;
    displacementSprite.y += 3 * delta;

    // render our stage
    renderer.render(stage);
})