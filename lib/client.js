import sanityClient  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client =  sanityClient({
    projectId: '5pvwqql5' ,
    dataset : 'production' ,
    apiVersion : 'v1' ,
    useCdn : true , 
    token : 'skvymAV6CeIXa9PqSJYXSdXX4ybT677QexNHXWabJwJO4Pyehbi3PC61lf8oHrpGYH1NkeEMbijRgClUdjhOZzh2tpjm5qQF1Ge4iG06Y90JiXNWl4xsDQqLdLSVs7UGvCLMECLEmJ2P6lGQmXPdZFLmsfsTapZNwtDkO2LKtPuJP62fKszH',
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)