import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageURL = (url: string) => {

    if(!url) return noImage; // temporary fix

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    //url.slice(index) gets the remaing charachters of the URL
}

export default getCroppedImageURL;