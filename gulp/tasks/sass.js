module.exports = function () {
	$.gulp.task('sass', function() {
	 return $.gulp.src($.paths.sass)
    .pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass())
		.pipe($.gp.autoprefixer({
		  browsers: ['last 10 versions']
		}))  
		.on("error", $.gp.notify.onError({
		  title: "stile"
		}))
		.pipe($.gp.csso())
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/static/css/'))
    .pipe($.gp.plumber())
		.pipe($.browserSync.reload({
			stream:true
		}));
	});
};
