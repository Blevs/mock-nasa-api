const express = require('express');

const server = express();
server.use(express.json());

const photos = [
  {
    "date":"2019-07-18",
    "explanation":"On July 16 the Moon celebrated the 50th anniversary of the launch of Apollo 11 with a lunar eclipse visible from much of planet Earth. In this view part of the lunar disk is immersed in Earth's dark, reddened umbral shadow. Near the maximum eclipse phase, it just touches down along a mountain ridge. The rugged Tyrolean nightscape was recorded after moonrise south of Innsbruck, Austria with a dramatically lit communication tower along the ridgeline. Of course eclipses rarely travel alone. This partial lunar eclipse was at the Full Moon following July 2nd's New Moon and total eclipse of the Sun.",
    "hdurl":"https://apod.nasa.gov/apod/image/1907/moon_eclipse_span.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Shadowed Moon and Mountain",
    "url":"https://apod.nasa.gov/apod/image/1907/moon_eclipse_span1066.jpg"
  },
  {
    "copyright":"Rainee Colacurcio",
    "date":"2019-07-15",
    "explanation":"That's no sunspot. It's the International Space Station (ISS) caught passing in front of the Sun. Sunspots, individually, have a dark central umbra, a lighter surrounding penumbra, and no solar panels.  By contrast, the ISS is a complex and multi-spired mechanism, one of the largest and most sophisticated machines ever created by humanity.  Also, sunspots occur on the Sun, whereas the ISS orbits the Earth.  Transiting the Sun is not very unusual for the ISS, which orbits the Earth about every 90 minutes, but getting one's timing and equipment just right for a great image is rare.  Strangely, besides that fake spot, in this recent two-image composite, the Sun  lacked any real sunspots.  The featured picture combines two images -- one capturing the space station transiting the Sun -- and another taken consecutively capturing details of the Sun's surface.  Sunspots have been rare on the Sun since the dawn of the current Solar Minimum, a period of low solar activity. For reasons not yet fully understood, the number of sunspots occurring during both the previous and current solar minima have been unusually low.",
    "hdurl":"https://apod.nasa.gov/apod/image/1907/SpotlessSunIss_Colacurcio_2048.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"The Space Station Crosses a Spotless Sun",
    "url":"https://apod.nasa.gov/apod/image/1907/SpotlessSunIss_Colacurcio_960.jpg"
  },
  {
    "copyright":"Bj\u00f8rn J\u00f8rgensen",
    "date":"2019-07-14",
    "explanation":"What's that in the sky? An aurora. A large coronal mass ejection occurred on our Sun five days before this 2012 image was taken, throwing a cloud of fast moving electrons, protons, and ions toward the Earth. Although most of this cloud passed above the Earth, some of it impacted our Earth's magnetosphere and resulted in spectacular auroras being seen at high northern latitudes. Featured here is a particularly photogenic auroral corona captured above Grotfjord, Norway. To some, this shimmering green glow of recombining atmospheric oxygen might appear as a large eagle, but feel free to share what it looks like to you.  Although the Sun is near Solar Minimum, streams of the solar wind continue to impact the Earth and create impressive auroras visible even last week.",
    "hdurl":"https://apod.nasa.gov/apod/image/1610/eagleaurora_jorgensen_900.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Eagle Aurora over Norway",
    "url":"https://apod.nasa.gov/apod/image/1610/eagleaurora_jorgensen_900.jpg"
  },
  {
    "copyright":"ALSJ",
    "date":"2019-07-13",
    "explanation":"Get out your red/blue glasses and check out this stereo view from lunar orbit. The 3D anaglyph was created from two photographs (AS11-44-6633, AS11-44-6634) taken by astronaut Michael Collins during the 1969 Apollo 11 mission. It features the lunar module ascent stage, dubbed The Eagle, rising to meet the command module in lunar orbit on July 21. Aboard the ascent stage are Neil Armstrong and Buzz Aldrin, the first to walk on the Moon. The smooth, dark area on the lunar surface is Mare Smythii located just below the equator on the extreme eastern edge of the Moon's near side.  Poised beyond the lunar horizon is our fair planet Earth.",
    "hdurl":"https://apod.nasa.gov/apod/image/1907/AS11JK44-6633-34.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"The Eagle Rises",
    "url":"https://apod.nasa.gov/apod/image/1907/AS11JK44-6633-34_1100px.jpg"
  }
];

server.get('/api', (req, res) => {
  res.status(200).json(photos);
});

const port = process.env.PORT || 4040;

server.listen(port, () => console.log(`API is running on port ${port}`));
