{
    // interface - generic

interface Developer<T , X = null> {
    name: string,
    computer: {
        brand: string,
        model: string,
        releaseYear: number, 
    },
    smartWatch: T,
    bike?: X,
}

type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
}

const poorDeveloper : Developer <EmilabWatch> = {
    name: 'Mahmud',
    computer: {
        brand: 'Dell',
        model: 'Probook',
        releaseYear: 2012,
    },
    smartWatch: {
brand: 'semphony',
model: 'y2h6',
display: 'amulet',
    }
}
 
interface AppleWatch {
    brand: string;
    model: string
    hartTrack: boolean;
    sleepingTrack: boolean;
}

interface YamahaBike {
    model: string;
    enginCapacity: string;
}
const richDeveloper : Developer <AppleWatch, YamahaBike> = {
    name: 'Hasan',
    computer: {
        brand: 'HP',
        model: 'ProbookG1',
        releaseYear: 2012,
    },
    smartWatch: {
        brand: 'Apple',
        model: 'apple3',
        hartTrack: true,
        sleepingTrack: true, 
    },
    bike: {
        model: 'Yamaha',
        enginCapacity: '100cc'
    },
}





}