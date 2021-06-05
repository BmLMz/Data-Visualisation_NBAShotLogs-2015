var ctx = {
    w: 800,
    h: 752,
    shots: [],
    prop: 16,
    basket_y: 672,
    basket_y_feet: 42,
    circle_resolution: 8,
    time: 24,
    made_bool: true,
    show_distance: false
};


var fill_color = "none"

var MyField = function (svg) {

    //Draw the basketball field
    var field = svg.append("g").attr("id", "field")


    //countour lines
    field.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", ctx.w)
        .attr("height", ctx.h)
        .attr("fill", fill_color)
        .attr("stroke-width", 8)
        .attr("stroke", "black");

    //3 point line
    field.append("circle")
        .attr("cx", ctx.w / 2)
        .attr("cy", ctx.basket_y)
        .attr("r", 380)
        .attr("stroke", "black")
        .attr("stroke-width", 4)
        .attr("fill", "none");

    field.append("rect")
        .attr("x", 4)
        .attr("y", ctx.h - 224)
        .attr("width", ctx.w - 8)
        .attr("height", 220)
        .attr("fill", fill_color)
        .attr("stroke-width", 0)
        .attr("stroke", "black");

    //Central point
    field.append("circle")
        .attr("cx", ctx.w / 2)
        .attr("cy", 0)
        .attr("r", 10)
        .attr("stroke", "black")
        .attr("stroke-width", 4);

    //Central circle
    field.append("circle")
        .attr("cx", ctx.w / 2)
        .attr("cy", 0)
        .attr("r", 120)
        .attr("stroke", "black")
        .attr("stroke-width", 4)
        .attr("fill", "none");

    //Basket
    field.append("circle")
        .attr("cx", ctx.w / 2)
        .attr("cy", ctx.basket_y)
        .attr("r", 16)
        .attr("stroke", "black")
        .attr("stroke-width", 4)
        .attr("fill", "none");


    //BlackBoard
    field.append("line")
        .attr("x1", ctx.w / 2 - 48)
        .attr("x2", ctx.w / 2 + 48)
        .attr("y1", ctx.h - 60)
        .attr("y2", ctx.h - 60)
        .attr("stroke-width", 4)
        .attr("stroke", "black");

    //Free throw circle:
    field.append("circle")
        .attr("cx", ctx.w / 2)
        .attr("cy", ctx.h - 296)
        .attr("r", 96)
        .attr("stroke", "black")
        .attr("stroke-width", 4)
        .attr("fill", "none");

    //Free throw rectangles
    field.append("rect")
        .attr("x", ctx.w / 2 - 96)
        .attr("y", ctx.h - 296)
        .attr("width", 192)
        .attr("height", 296)
        .attr("fill", "none")
        .attr("stroke-width", 4)
        .attr("stroke", "black");

    field.append("rect")
        .attr("x", ctx.w / 2 - 128)
        .attr("y", ctx.h - 296)
        .attr("width", 256)
        .attr("height", 296)
        .attr("fill", "none")
        .attr("stroke-width", 4)
        .attr("stroke", "black");

    if (ctx.made_bool) {
        draw_legend_made(svg);
    }
    else {
        draw_legend_success(svg);
    }


};


var draw_legend_success = function (svg) {
    svg.append("rect")
        .attr("x", 800)
        .attr("y", 0)
        .attr("width", 200)
        .attr("height", ctx.h)
        .attr("fill", "white")
        .attr("stroke-width", 4)
        .attr("stroke", "none");

    var legend_success = svg.append("g").attr("id", "legend");

    for (var i = 0; i <= 200; i++) {
        legend_success.append("line")
            .attr("x1", 820)
            .attr("y1", 250 - i)
            .attr("x2", 820 + 40)
            .attr("y2", 250 - i)
            .attr("stroke", ctx.color_made(i / 2));
    }

    legend_success.append("line")
        .attr("x1", 820)
        .attr("y1", 251)
        .attr("x2", 820 + 40)
        .attr("y2", 251)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_success.append("line")
        .attr("x1", 820)
        .attr("y1", 49)
        .attr("x2", 820 + 40)
        .attr("y2", 49)
        .attr("stroke-width", 2)
        .attr("stroke", "black")


    legend_success.append("line")
        .attr("x1", 820 + 40)
        .attr("y1", 49)
        .attr("x2", 820 + 40)
        .attr("y2", 251)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    //Special lines
    //Title
    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 30)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Success Rate of shots")

    //20%
    legend_success.append("line")
        .attr("x1", 820 + 30)
        .attr("y1", 210)
        .attr("x2", 820 + 40)
        .attr("y2", 210)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_success.append("text")
        .attr("x", 865)
        .attr("y", 213)
        .attr("fill", "black")
        .text("20 %")

    //50%
    legend_success.append("line")
        .attr("x1", 820 + 30)
        .attr("y1", 150)
        .attr("x2", 820 + 40)
        .attr("y2", 150)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_success.append("text")
        .attr("x", 865)
        .attr("y", 153)
        .attr("fill", "black")
        .text("50 %")

    //80%
    legend_success.append("line")
        .attr("x1", 820 + 30)
        .attr("y1", 90)
        .attr("x2", 820 + 40)
        .attr("y2", 90)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_success.append("text")
        .attr("x", 865)
        .attr("y", 93)
        .attr("fill", "black")
        .text("80 %")

    //Statistics
    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 400)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Total shots made")

    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 420)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text(stats(ctx.time)[0])

    //Statistics
    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 460)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Nb sucess shots")

    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 480)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text(stats(ctx.time)[1])

    //Statistics
    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 520)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Success rate")

    legend_success.append("text")
        .attr("x", 820)
        .attr("y", 540)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text(stats(ctx.time)[2] + " %")


}



var draw_legend_made = function (svg) {
    svg.append("rect")
        .attr("x", 800)
        .attr("y", 0)
        .attr("width", 200)
        .attr("height", ctx.h)
        .attr("fill", "white")
        .attr("stroke-width", 4)
        .attr("stroke", "none");

    var legend_made = svg.append("g").attr("id", "legend");

    for (var i = 0; i <= 200; i++) {
        legend_made.append("line")
            .attr("x1", 820)
            .attr("y1", 250 - i)
            .attr("x2", 820 + 40)
            .attr("y2", 250 - i)
            .attr("stroke", ctx.color_dist(i * 30));
    }

    legend_made.append("line")
        .attr("x1", 820)
        .attr("y1", 251)
        .attr("x2", 820 + 40)
        .attr("y2", 251)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_made.append("line")
        .attr("x1", 820)
        .attr("y1", 49)
        .attr("x2", 820 + 40)
        .attr("y2", 49)
        .attr("stroke-width", 2)
        .attr("stroke", "black")


    legend_made.append("line")
        .attr("x1", 820 + 40)
        .attr("y1", 49)
        .attr("x2", 820 + 40)
        .attr("y2", 251)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    //Special lines
    //Title
    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 30)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Number of shots made")

    //20%
    legend_made.append("line")
        .attr("x1", 820 + 30)
        .attr("y1", 210)
        .attr("x2", 820 + 40)
        .attr("y2", 210)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_made.append("text")
        .attr("x", 868)
        .attr("y", 213)
        .attr("fill", "black")
        .text("1000")

    //50%
    legend_made.append("line")
        .attr("x1", 820 + 30)
        .attr("y1", 150)
        .attr("x2", 820 + 40)
        .attr("y2", 150)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_made.append("text")
        .attr("x", 868)
        .attr("y", 153)
        .attr("fill", "black")
        .text("2500")

    //80%
    legend_made.append("line")
        .attr("x1", 820 + 30)
        .attr("y1", 90)
        .attr("x2", 820 + 40)
        .attr("y2", 90)
        .attr("stroke-width", 2)
        .attr("stroke", "black")

    legend_made.append("text")
        .attr("x", 868)
        .attr("y", 93)
        .attr("fill", "black")
        .text("3500")

    //Statistics
    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 400)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Total shots made")

    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 420)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text(stats(ctx.time)[0])

    //Statistics
    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 460)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Nb sucess shots")

    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 480)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text(stats(ctx.time)[1])

    //Statistics
    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 520)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text("Success rate")

    legend_made.append("text")
        .attr("x", 820)
        .attr("y", 540)
        .attr("fill", "black")
        .attr("stroke", "black")
        .text(stats(ctx.time)[2] + " %")
}

var show_dist = function () {
    if (d3.select("#updateBt").attr("value") == "Off") {
        d3.select("#updateBt").attr("value", "On");
        var sh_ds = ctx.svgEl.append("g").attr("id", "distances")

        //5ft
        sh_ds.append("circle")
            .attr("cx", ctx.w / 2)
            .attr("cy", ctx.basket_y)
            .attr("r", 82.6)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("opacity", 0.8)

        sh_ds.append("text")
            .attr("x", 470)
            .attr("y", ctx.basket_y - 50)
            .attr("fill", "black")
            .attr("stroke", "black")
            .text("5 ft.")

        //10ft
        sh_ds.append("circle")
            .attr("cx", ctx.w / 2)
            .attr("cy", ctx.basket_y)
            .attr("r", 165.2)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("opacity", 0.8)

        sh_ds.append("text")
            .attr("x", 540)
            .attr("y", ctx.basket_y - 100)
            .attr("fill", "black")
            .attr("stroke", "black")
            .text("10 ft.")

        //15ft
        sh_ds.append("circle")
            .attr("cx", ctx.w / 2)
            .attr("cy", ctx.basket_y)
            .attr("r", 247.8)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("opacity", 0.8)

        sh_ds.append("text")
            .attr("x", 606)
            .attr("y", ctx.basket_y - 146)
            .attr("fill", "black")
            .attr("stroke", "black")
            .text("15 ft.")

        //20ft
        sh_ds.append("circle")
            .attr("cx", ctx.w / 2)
            .attr("cy", ctx.basket_y)
            .attr("r", 330.4)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("opacity", 0.8)

        sh_ds.append("text")
            .attr("x", 676)
            .attr("y", ctx.basket_y - 190)
            .attr("fill", "black")
            .attr("stroke", "black")
            .text("20 ft.")

        sh_ds.append("text")
            .attr("x", 716)
            .attr("y", ctx.basket_y - 220)
            .attr("fill", "black")
            .attr("stroke", "black")
            .text("23 ft.(3pts)")

    }
    else {
        d3.select("#updateBt").attr("value", "Off");
        d3.select("#distances").remove();
    }
    ctx.show_distance = !ctx.show_distance
}


var dist_to_dico = function (data) {
    var number_of_slot = Math.trunc(ctx.basket_y / ctx.circle_resolution)
    var dist_shots = new Array(number_of_slot).fill(0);
    var dist_mades = new Array(number_of_slot).fill(0);
    for (var j = 0; j < data.length; j++) {
        if (data[j].SHOT_CLOCK <= Math.trunc(ctx.time)) {
            pix_dist = data[j].SHOT_DIST * 16
            slot = 0
            while ((slot * ctx.circle_resolution) < pix_dist) {
                slot += 1
            }
            dist_shots[slot - 1] += 1
            if (data[j].SHOT_RESULT == "made") {
                dist_mades[slot - 1] += 1
            }
        }
    }

    min = dist_shots[0]
    max = dist_shots[0]
    for (var j = 0; j < dist_shots.length; j++) {
        if (dist_shots[j] > max) {
            max = dist_shots[j]
        }
        if (dist_shots[j] < min) {
            min = dist_shots[j]
        }
    }

    var dist_slot = new Array(number_of_slot).fill(0);
    for (var e = 0; e < dist_shots.length; e++) {
        dist_slot[e] = { slot: e, count_dist: dist_shots[e], count_made: (dist_mades[e] / dist_shots[e]) * 100 }
    }


    min_dist = dist_slot[0]["count_dist"]
    max_dist = dist_slot[0]["count_dist"]
    for (var j = 0; j < dist_shots.length; j++) {
        if (dist_slot[j]["count_dist"] > max_dist) {
            max_dist = dist_slot[j]["count_dist"]
        }
        if (dist_slot[j]["count_dist"] < min_dist) {
            min_dist = dist_slot[j]["count_dist"]
        }
    }

    /*
    smooth_temp = dist_slot.slice()
    var n_smooth = 5
    for (var i = 2; i < smooth_temp.length - 2; i++){
        var sum_d = 0
        var sum_m = 0
        for(var j = -2; j < 3; j++){
            sum_d += smooth_temp[i + j]["count_dist"]
            sum_m += smooth_temp[i + j]["count_made"]
        }
        console.log(dist_slot[j]["count_dist"])
        dist_slot[j]["count_dist"] = 0
        dist_slot[j]["count_made"] = 0.7 * dist_slot[j]["count_dist"] + 0,3*sum_d/n_smooth
        console.log(dist_slot[j]["count_dist"])
    }
    */

    min_made = dist_slot[0]["count_made"]
    max_made = dist_slot[0]["count_made"]
    for (var j = 0; j < dist_shots.length; j++) {
        if (dist_slot[j]["count_made"] > max_made) {
            max_made = dist_slot[j]["count_made"]
        }
        if (dist_slot[j]["count_made"] < min_made) {
            min_made = dist_slot[j]["count_made"]
        }
    }


    return [dist_slot, min_dist, max_dist, min_made, max_made]

}


var MyViz = function (svg) {

    var X = dist_to_dico(ctx.shots)
    MyDist = X[0]
    min_dist = X[1]
    max_dist = X[2]
    min_made = X[3]
    max_made = X[4]

    //console.log(min_dist, max_dist, min_made, max_made)

    //console.log(MyDist)

    ctx.color_dist = d3.scaleLinear()
        .domain([0, 6000])
        .range(["lightblue", "DarkBlue"]);

    ctx.color_made = d3.scaleLinear()
        .domain([0, 20, 45, 100])
        .range(["red", "orange", "green", "#003300"]);

    //Draw the vizualization
    var dist_circles = svg.append("g").attr("id", "dist_circles")

    createTimeHisto()

    if (ctx.made_bool) {
        dist_circles.selectAll("circle")
            .data(MyDist)
            .enter()
            .append("circle")
            .attr("cx", ctx.w / 2)
            .attr("cy", ctx.basket_y)
            .attr("r", (d) => (d.slot * ctx.circle_resolution + ctx.circle_resolution / 2))
            .attr("stroke", (d) => ctx.color_dist(d.count_dist))
            .attr("stroke-width", 3 * ctx.circle_resolution)
            .attr("fill", "none")
            .attr("opacity", 0.5);
        createDistHisto();
    }
    else {
        dist_circles.selectAll("circle")
            .data(MyDist)
            .enter()
            .append("circle")
            .attr("cx", ctx.w / 2)
            .attr("cy", ctx.basket_y)
            .attr("r", (d) => (d.slot * ctx.circle_resolution + ctx.circle_resolution / 2))
            .attr("stroke", (d) => ctx.color_made(d.count_made))
            .attr("stroke-width", 3 * ctx.circle_resolution)
            .attr("fill", "none")
            .attr("opacity", 0.5);
        createDistHisto2();
    }

};

var createViz = function () {
    console.log("Using D3 v" + d3.version);
    d3.select("body")
        .on("keydown", function (event, d) { handleKeyEvent(event); });
    ctx.svgEl = d3.select("#main").append("svg");
    ctx.svgEl.attr("width", ctx.w + 200);
    ctx.svgEl.attr("height", ctx.h);
    loadData(ctx.svgEl);
};

var createDistHisto = function () {
    var vlSpec = {
        "data": {
            "values": ctx.shot_time
        },
        "selection": {
            "pts": { "type": "single", "on": "mouseover" }
        },

        "mark": "bar",
        "encoding": {
            "x": {
                "type": "quantitative",
                "bin": true,
                "field": "SHOT_DIST",
                "axis": {
                    "title": "Shot distance (in feets)"
                }
            },
            "y": {
                "type": "quantitative",
                "aggregate": "count",
                "axis": {
                    "title": "Number of shot made"
                }
            },
            "opacity": {
                "condition": { "selection": "pts", "value": 1 },
                "value": 0.2
            }
        }
    }
    var vlOpts = { width: 300, height: 300, actions: false };
    vegaEmbed("#shot_made_hist", vlSpec, vlOpts);
};


var createDistHisto2 = function () {
    var vlSpec = {
        "data": {
            "values": ctx.shot_time
        },
        "selection": {
            "pts": { "type": "single", "on": "mouseover" }
        },

        "mark": "bar",
        "encoding": {
            "x": {
                "type": "quantitative",
                "bin": true,
                "field": "SHOT_DIST",
                "axis": {
                    "title": "Shot distance (in feets)"
                }
            },
            "y": {
                "type": "quantitative",
                "aggregate": "count",
                "axis": {
                    "title": "Number of shot made"
                }
            },
            "color": {
                "field": "SHOT_RESULT",
                "title": "Shot result",
                "type": "nominal",
                "scale": {
                    "domain": ["made", "missed"],
                    "range": ["green", "red"]
                }
            },
            "opacity": {
                "condition": { "selection": "pts", "value": 1 },
                "value": 0.2
            }
        }
    }
    var vlOpts = { width: 300, height: 300, actions: false };
    vegaEmbed("#shot_made_hist", vlSpec, vlOpts);
};

var createTimeHisto = function () {
    var vlSpec = {
        "data": {
            "values": ctx.tabi
        },
        "selection": {
            "pts": { "type": "single", "on": "mouseover" }
        },

        "mark": "bar",
        "encoding": {
            "x": {
                "type": "quantitative",
                "field": "time",
                "sort": "descending",
                "axis": {
                    "title": "Time left (sec)"
                }
            },
            "y": {
                "type": "quantitative",
                "field": "success_rate",
                "axis": {
                    "title": "Success Rate (%)"
                }
            },
            "color": {"value": "green"},
            "opacity": {
                "condition": { "selection": "pts", "value": 1 },
                "value": 0.2
            }
        }
    }
    var vlOpts = { width: 300, height: 300, actions: false };
    vegaEmbed("#shot_time", vlSpec, vlOpts);
};


var stats = function (time) {
    made_tab = new Array(25).fill(0);
    success_tab = new Array(25).fill(0);
    for (var i = 0; i < ctx.shots.length; i++) {
        if (ctx.shots[i].SHOT_RESULT == "made") {
            for (var j = Math.trunc(ctx.shots[i].SHOT_CLOCK); j <= 24; j++) {
                success_tab[j] += 1
            }
        }
        for (var j = Math.trunc(ctx.shots[i].SHOT_CLOCK); j <= 24; j++) {
            made_tab[j] += 1
        }
    }
    ctx.tabi = []
    for (var i = 24; i >= 0; i--){
        if ((success_tab[i] * 100 / made_tab[i]) != null){
            ctx.tabi.push({
                time : i,
                success_rate : success_tab[i] * 100 / made_tab[i]
            })
        }
    }
    //console.log(ctx.tabi)
    return [made_tab[time], success_tab[time], success_tab[time] * 100 / made_tab[time]]
}


var loadData = function (svg) {
    Promise.all([d3.csv("shot_logs.csv")])
        .then(function (data) {
            ctx.shots = data[0]
            ctx.shot_time = ctx.shots
            stats();
            MyViz(svg);
            MyField(svg);
            //console.log(ctx.shots)
        }
        ).catch(function (error) { console.log(error) });
};


var handleKeyEvent = function (e) {
    switch (e.key) {
        case "Escape":
            set2();
            break;
        case "Enter":
            toggleVis();
            break;
        default:
            break;
    }
};

var toggleVis = function () {
    ctx.made_bool = !ctx.made_bool;
    if (ctx.made_bool) {
        d3.select("#dist_circles")
            .selectAll("circle")
            .transition()
            .duration(1500)
            .attr("stroke", (d) => ctx.color_dist(d.count_dist))

        //Change legend
        d3.select("#legend").remove();
        draw_legend_made(ctx.svgEl);


        //Change histo
        setTimeout(() => { createDistHisto(); }, 3000);

        document.getElementById("searchType").value = "Made"
    }
    else {
        d3.select("#dist_circles")
            .selectAll("circle")
            .transition()
            .duration(1500)
            .attr("stroke", (d) => ctx.color_made(d.count_made))

        //Change legend
        d3.select("#legend").remove();
        draw_legend_success(ctx.svgEl);

        //Change histo
        setTimeout(() => { createDistHisto2(); }, 1000);

        document.getElementById("searchType").value = "Success"
    }
};


var set1 = function () {
    searchType = document.getElementById("searchType").value;

    switch (searchType) {
        case "Dist":
            d3.select("#dist_circles")
                .selectAll("circle")
                .transition()
                .duration(1500)
                .attr("stroke", (d) => ctx.color_dist(d.count_dist))

            break;

        case "Success":
            d3.select("#dist_circles")
                .selectAll("circle")
                .transition()
                .duration(1500)
                .attr("stroke", (d) => ctx.color_made(d.count_made))

            break;
    }
};

var set2 = function () {
    count = document.getElementById("countTf").value;
    ctx.time = Math.min(count,24)
    ctx.shot_time = []
    console.log(ctx.time)
    for (var i = 0; i < ctx.shots.length; i++) {
        if (ctx.shots[i].SHOT_CLOCK <= Math.trunc(ctx.time)) {
            ctx.shot_time.push({
                SHOT_DIST: ctx.shots[i].SHOT_DIST,
                SHOT_RESULT: ctx.shots[i].SHOT_RESULT,
            })
        }
    }
    d3.select("#dist_circles").remove();
    MyViz(ctx.svgEl)
    MyField(ctx.svgEl)
};

