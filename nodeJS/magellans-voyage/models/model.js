var voyage = {
    seville : {
    title: 'seville',
    description:"Seville is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmakrs include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giraldo.",
    previous: '',
    nextDestination:'canaryIslands'
},
canaryIslands : {
    title: 'CanaryIslands',
    description:"Canary Islands is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmakrs include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giraldo.",
    previous: '',
    nextDestination:'capeVerde'
},
capeVerde : {
    title: 'Cape Verde',
    description:"Cape Verde is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmakrs include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giraldo.",
    previous: 'canaryIslands',
    nextDestination:'straitOfMagellan'
},
straitOfMagellan : {
    title: 'Strait of Magellan',
    description:"Strait of Magellan is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmakrs include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giraldo.",
    previous: 'capeVerde',
    nextDestination:'guam'
},
guam : {
    title: 'Guam',
    description:"Guam is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmakrs include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giraldo.",
    previous: 'straitOfMagellan',
    nextDestination:'phillipines'
},
phillipines: {
    title: 'Phillipines',
    description:"Phillipines is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmakrs include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giraldo.",
    previous: 'guam',
    nextDestination:''
}
};

module.exports = voyage;
