// CharacterCustomization.js
// This script manages character customization in the furry MMO

class CharacterCustomization {
    constructor() {
        this.species = 'Unknown';
        this.colors = {};
        this.accessories = [];
    }

    setSpecies(species) {
        this.species = species;
    }

    setColors(colors) {
        this.colors = colors;
    }

    addAccessory(accessory) {
        this.accessories.push(accessory);
    }
}

export default CharacterCustomization;