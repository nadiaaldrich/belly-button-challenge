function getPlots(id){
    // read sample
    d3.json("samples.json").then(sampledata => {
        console.log(sampledata)
        var ids = sampledata.samples[0].otu_ids;
        console.log(ids)
        var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValues)
        var labels = sampledata.samples[0].otu_labels.slice(0, 10)
        console.log(labels)

        var OTU_top = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();

        var OTU_id = OTU_top.map(d => "OTU" + d);
        console.log('OTU IDS: ${OTU_id}')

        var labels = sampledata.samples[0].otu_labels.slice(0,10);
        console.log('OTU_labels: ${labels}')

        var trace = {
            x: sampleValues, 
            y: OTU_id,
            text: labels, 
            marker: {
                color: 'green'}, 
                type: "bar", 
                orientation: "h",
            };

        var data = [trace];

        }

        

    })
}