import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer d1vUCYlInUQEQpigYK_x-2cmhuEKIxyigb3Kip8RAA_qu0uYml3jVAMIGw_NYkZqh3In2tteLLxJehIDRL7mnJzp6sh4W0Iy7lQgc1kRDQSdUE6o2NnYkfnppPPoYHYx'
    }
});
