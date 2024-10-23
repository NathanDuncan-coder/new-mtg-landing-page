"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // Search term state
    const [filteredItems, setFilteredItems] = useState([]); // Filtered results state


    const categorizeItems = () => {
        const categories = {
            colors: [],
            cardTypes: [],
            Tribes: [],
            Guilds: [],
            wedges: [],
            Nephilims: [],
            formats: [],
        };

        items.forEach(item => {
            if (["Red","Green","Blue","Black","White"].includes(item)){
                categories.colors.push(item);
            } else if (["Land","Creature","Artifact","Enchantment","Planeswalker","Battle","Instant","Sorcery","Tribal","Token","Emblem","Dungeon","Phenomenon","Plane","Scheme","Bounties","Conspiracy"].includes(items)){
                categories.cardTypes.push(item);
            } else if (["Aetherborn","Advisor","Ally","Alien","Angel","Antelope","Ape","Archer","Army","Archon","Artificer","Assassin","Assembly-Worker","Astartes","Atog","Aurochs","Avatar","Azra",
                        "Badger","Balloon","Barbarian","Basilisk","Bat","Bear","Beast","Beaver","Beeble","Beholder","Berserker","Bird","Blinkmoth","Boar","Bringer","Brushwagg",
                        "Camarid","Camel","Capybara","Caribou","Carrier","Cat","Centaur","Child","Cephalid","Chimera","Citizen","Cleric","Clown","Cockatrice","Construct","Coward","Coyote","Crab","Crocodile","Custodes","Cybermen","Cyclops","C'tan",
                        "Dalek","Dauthi","Demigod","Demon","Deserter","Detective","Devil","Dinosaur","Djinn","Doctor","Dog","Dragon","Drake","Dreadnought","Drone","Druid","Dryad","Dwarf",
                        "Efreet","Egg","Elder", "Eldrazi","Elemental","Elephant","Elf","Elk","Employee","Eye",
                        "Faerie","Ferret","Fish","Flagbearer","Fox","Fractal", "Frog","Fungus",
                        "Gamer","Gargoyle","Germ","Giant","Gith","Glimmer","Gnoll","Gnome","Goat","Goblin","God","Golem","Gorgon","Graveborn","Gremlin","Griffin","Guest",
                        "Hag","Halfling","Hamster","Harpy","Hellion","Hippo","Hippogriff", "Homunculus","Horror","Horse","Human","Hound","Hydra","Hyena",
                        "Illusion","Imp","Incarnation","Inkling","Inquisitor","Insect",
                        "Jackal","Jellyfish","Juggernaut",
                        "Kavu","Kirin","Kithkin","Knight","Kobold", "Kor","Kraken",
                        "Lamia","Lammasu","Leech", "Leviathan","Lhurgoyf","Licid", "Lizard","Llama",
                        "Manticore","Masticore", "Mercenary", "Merfolk","Metathran", "Minion", "Minotaur","Mite", "Mole","Monger","Mongoode","Monk", "Monkey","Moonfolk","Mount","Mouse", "Mutant","Myr","Mystic",
                        "Naga","Nautilus","Necron","Nephilim","Nightmare","Nightstalker","Ninja","Noble","Noggle","Nomad","Nymph",
                        "Octopus","Ogre","Ooze", "Orb", "Orc","Orgg","Otter","Ouphe","Ox","Oyster",
                        "Pangolin","Pegasus","Pentavite","Performer","Pest","Pilot","Phelddagrif","Phoenix","Phyrexian", "Plant", "Porcupine","Possum","Pirate", "Praetor","Primarch","Prism","Processor",
                        "Rabbit", "Raccoon","Ranger","Rat","Rebel","Reflection", "Rhino", "Rigger", "Robot","Rogue", 
                        "Sable","Salamander","Samurai","Sand","Saproling","Satyr","Scarecrow","Scientist", "Scion", "Scorpion","Scout","Serf","Serpent","Servo","Shade", "Shaman", "Shapeshifter","Shark", "Sheep", "Siren","Skeleton","Skunk","Slith","Sliver","Sloth","Slug", "Snail","Snake","Soldier","Soltari","Spawn","Specter","Spellchaser","Sphinx","Spider","Spike","Spirit","Splinter","Sponge", "Squid", "Squirrel","Starfish","Surrakar","Survivor","Synth",
                        "Tentacle","Tetravite","Thalakos", "Thopter", "Thrull","Tiefling","Time Lord","Toy","Treefolk","Trilobite","Triskelavite","Troll", "Turtle", "Tyranid",
                        "Unicorn",
                        "Vampire","Varmint","Vedalken","Viashino","Volver",
                        "Wall","Walrus","Warlock","Warrior","Weasel","Weird", "Werewolf", "Whale", "Wizard","Wolverine","Wombat", "Worm","Wraith", "Wurm",
                        "Yeti",
                        "Zombie","Zubera",].includes(item)) {categories.Tribes.push(item);

                        } else if (["Azorius","Boros","Orzhov","Dimir","Golgari","Selesnya","Gruul","Izzet","Rakdos","Simic",].includes(item)){
                            categories.Guildes.push(item);

                        } else if (["Bant","Esper","Grixis","Jund","Naya","Mardu","Temur","Abzan","Jeskai","Sultai",].includes(item)){
                            categories.wedges.push(item);

                        } else if (["Choas","Dune","Witch","Yore","Altruism",].includes(item)){
                            categories.Nephilims.push(item);
                        } else if (["Alpha","Beta","Unlimited","Arabian Nights","Antiquities","Legends","The Dark","Fallen Empires","Homelands","Alliances","Mirage","Visions","Weatherlight","Tempest","Stronghold",
                                    "Exodus","Urza's Saga","Urza's Legacy","Urza's Destiny","Mercadian Masques","Ninth Edition","Torment","Judgment","Onslaught","Legions","Scourge","Eighth Edition","Dissension",
                                    "Guildpact","Ravnica: City of Guilds","Mirrodin","Darksteel","Fifth Dawn","Coldsnap","Time Spiral","Planar Chaos","Future Sight","Lorwyn","Morningtide","Shadowmoor","Eventide","Shards of Alara","Conflux","Alara Reborn","Zendikar","Worldwake",
                                    "Rise of the Eldrazi","Magic 2010","Scars of Mirrodin","Mirrodin Besieged","Dark Ascension","Avacyn Restored","Magic 2013","Return to Ravnica","Gatecrash","Dragon's Maze",
                                    "Theros","Born of the Gods","Journey into Nyx","Magic 2015","Khans of Tarkir","Fate Reforged","Dragons of Tarkir","Magic Origins","Battle for Zendikar","Oath of the Gatewatch",
                                    "Shadows over Innistrad","Eldritch Moon","Kaladesh","Aether Revolt","Amonkhet","Hour of Devastation","Ixalan","Rivals of Ixalan","Dominaria",
                                    "Core Set 2019","Guilds of Ravnica","Ravnica Allegiance","War of the Spark","Core Set 2020","Throne of Eldraine","Theros: Beyond Death","Ikoria: Lair of Behemoths",
                                    "Core Set 2021","Zendikar Rising","Kaldheim","Strixhaven: School of Mages","Modern Horizons 2","Dungeons & Dragons: Adventures in the Forgotten Realms","Innistrad: Midnight Hunt","Innistrad: Crimson Vow",
                                    "Kamigawa: Neon Dynasty","Streets of New Capenna","Unfinity","Dominaria United","The Brothers' War","Phyrexia: All Will Be One","March of the Machine","March of the Machine: The Aftermath","Eldraine Remastered",
                                    "Lost Caverns of Ixalan","Wilds of Eldraine",].includes(item)){categories.sets.push(item);

                        } else if (["Alchemy","Brawl","Booster Draft","Canadian Highlander","Commander (EDH)","Constructed","Cube Draft","Duel Commander","Extended","Explorer","Frontier","Historic","Historic Brawl","Legacy","Limited","Modern","Oathbreaker","Pauper","Pauper Commander","Pioneer","Premodern","Sealed Deck","Singleton","Standard","Tiny Leaders","Two-Headed Giant","Vintage"].includes(item)){
                            categories.Formats.push(item);
                        } 
        });

        return catefories;

    };

    const items = [
        // colors
        "Red",
        "Green",
        "Blue",
        "Black",
        "White",

        // Card types
        "Land",
        "Creature",
        "Artifact",
        "Enchantment",
        "Planeswalker",
        "Battle",
        "Instant",
        "Sorcery",
        "Tribal",
        "Token",
        "Emblem",
        "Dungeon",
        "Phenomenon",
        "Plane",
        "Scheme",
        "Bounties",
        "Conspiracy",
        
         // Guilds(Two colors)
        "Azorius (White-Blue)",
        "Boros (Red-White)",
        "Orzhov (White-Black)",
        "Dimir (Blue-Black)",
        "Golgari (Black-Green)",
        "Selesnya (Green-White)",
        "Gruul (Red-Green)",
        "Izzet (Blue-Red)",
        "Rakdos (Black-Red)",
        "Simic (Green-Blue)",

        // Wedge colors (Three colors)
        "Bant (Green-White-Blue)",
        "Esper (White-Blue-Black)",
        "Grixis (Blue-Black-Red)",
        "Jund (Red-Green-Black)",
        "Naya (Red-Green-White)",
        "Mardu (Red-White-Black)",
        "Temur (Green-Blue-Red) ",
        "Abzan (White-Black-Green)",
        "Jeskai (Red-White-Blue)",
        "Sultai (Black-Green-Blue)",

        //Nephilims or "Four color"
        "Choas (Blue-Black-Red-Green",
        "Dune (White-Black-Green-Red)",
        "Witch (White-Blue-Black-Green)",
        "Yore (White-Blue-Black-Red)",
        "Altruism (White-Blue-Red-Green)",

        // Tribes
      
        "Aetherborn",
        "Advisor",
        "Ally",
        "Alien",
        "Angel",
        "Antelope",
        "Ape",
        "Archer",
        "Army",
        "Archon",
        "Artificer",
        "Assassin", 
        "Assembly-Worker",
        "Astartes",
        "Atog",
        "Aurochs",
        "Avatar",
        "Azra",
    
        "Badger",
        "Balloon",
        "Barbarian",
        "Basilisk", 
        "Bat",
        "Bear",
        "Beast",
        "Beaver",
        "Beeble",
        "Beholder",
        "Berserker",
        "Bird",
        "Blinkmoth",
        "Boar",
        "Bringer",
        "Brushwagg",
    
        "Camarid",
        "Camel",
        "Capybara",
        "Caribou",
        "Carrier",
        "Cat",
        "Centaur",
        "Child",
        "Cephalid",
        "Chimera",
        "Citizen",
        "Cleric",
        "Clown",
        "Cockatrice",
        "Construct",
        "Coward",
        "Coyote",
        "Crab",
        "Crocodile",
        "Custodes",
        "Cybermen",
        "Cyclops",
        "C'tan",
    
        "Dalek",
        "Dauthi",
        "Demigod",
        "Demon",
        "Deserter",
        "Detective",
        "Devil",
        "Dinosaur",
        "Djinn",
        "Doctor",
        "Dog",
        "Dragon",
        "Drake",
        "Dreadnought",
        "Drone",
        "Druid",
        "Dryad",
        "Dwarf",
    
        "Efreet",
        "Egg",
        "Elder", 
        "Eldrazi",
        "Elemental",
        "Elephant",
        "Elf",
        "Elk",
        "Employee",
        "Eye",
    
        "Faerie",
        "Ferret",
        "Fish",
        "Flagbearer",
        "Fox",
        "Fractal", 
        "Frog",
        "Fungus",
    
        "Gamer",
        "Gargoyle",
        "Germ",
        "Giant",
        "Gith",
        "Glimmer",
        "Gnoll",
        "Gnome",
        "Goat",
        "Goblin",
        "God",
        "Golem",
        "Gorgon",
        "Graveborn",
        "Gremlin",
        "Griffin",
        "Guest",
    
        "Hag",
        "Halfling",
        "Hamster",
        "Harpy",
        "Hellion",
        "Hippo",
        "Hippogriff", 
        "Homunculus",
        "Horror",
        "Horse",
        "Human",
        "Hound",
        "Hydra",
        "Hyena",
    
        "Illusion",
        "Imp", 
        "Incarnation",
        "Inkling",
        "Inquisitor",
        "Insect",
    
        "Jackal",
        "Jellyfish",
        "Juggernaut",
    
        "Kavu",
        "Kirin",
        "Kithkin",
        "Knight",
        "Kobold", 
        "Kor",
        "Kraken",
    
        "Lamia",
        "Lammasu",
        "Leech", 
        "Leviathan",
        "Lhurgoyf",
        "Licid", 
        "Lizard",
        "Llama",
    
        "Manticore",
        "Masticore", 
        "Mercenary", 
        "Merfolk",
        "Metathran", 
        "Minion", 
        "Minotaur",
        "Mite", 
        "Mole",
        "Monger",
        "Mongoode",
        "Monk", 
        "Monkey",
        "Moonfolk",
        "Mount",
        "Mouse", 
        "Mutant",
        "Myr",
        "Mystic",
      
        "Naga",
        "Nautilus",
        "Necron",
        "Nephilim",
        "Nightmare", 
        "Nightstalker",
        "Ninja", 
        "Noble",
        "Noggle",
        "Nomad",
        "Nymph",
    
        "Octopus", 
        "Ogre",
        "Ooze", 
        "Orb", 
        "Orc",
        "Orgg",
        "Otter",
        "Ouphe",
        "Ox",
        "Oyster",
    
        "Pangolin",
        "Pegasus",
        "Pentavite",
        "Performer",
        "Pest",
        "Pilot",
        "Phelddagrif",
        "Phoenix",
        "Phyrexian", 
        "Plant", 
        "Porcupine",
        "Possum",
        "Pirate", 
        "Praetor",
        "Primarch",
        "Prism",
        "Processor",
    
        "Rabbit", 
        "Raccoon",
        "Ranger",
        "Rat",
        "Rebel",
        "Reflection", 
        "Rhino", 
        "Rigger", 
        "Robot",
        "Rogue", 
    
        "Sable",
        "Salamander",
        "Samurai",
        "Sand",
        "Saproling",
        "Satyr",
        "Scarecrow",
        "Scientist", 
        "Scion", 
        "Scorpion",
        "Scout", 
        "Serf", 
        "Serpent",
        "Servo",
        "Shade", 
        "Shaman", 
        "Shapeshifter",
        "Shark", 
        "Sheep", 
        "Siren",
        "Skeleton",
        "Skunk",
        "Slith",
        "Sliver",
        "Sloth",
        "Slug", 
        "Snail",
        "Snake",
        "Soldier",
        "Soltari",
        "Spawn",
        "Specter",
        "Spellchaser",
        "Sphinx",
        "Spider", 
        "Spike",
        "Spirit",
        "Splinter",
        "Sponge", 
        "Squid", 
        "Squirrel",
        "Starfish",
        "Surrakar",
        "Survivor",
        "Synth",
    
        "Tentacle",
        "Tetravite",
        "Thalakos", 
        "Thopter", 
        "Thrull",
        "Tiefling",
        "Time Lord",
        "Toy",
        "Treefolk",
        "Trilobite",
        "Triskelavite",
        "Troll", 
        "Turtle", 
        "Tyranid",
    
        "Unicorn",
    
        "Vampire",
        "Varmint",
        "Vedalken",
        "Viashino",
        "Volver",
    
        "Wall",
        "Walrus",
        "Warlock", 
        "Warrior",
        "Weasel",
        "Weird", 
        "Werewolf", 
        "Whale", 
        "Wizard",
        "Wolverine",
        "Wombat", 
        "Worm",
        "Wraith", 
        "Wurm",
    
        "Yeti",
        
        "Zombie",
        "Zubera",

        // sets

        "Alpha",
        "Beta",
        "Unlimited",
        "Arabian Nights",
        "Antiquities",
        "Legends",
        "The Dark",
        "Fallen Empires",
        "Homelands",
        "Alliances",
        "Mirage",
        "Visions",
        "Weatherlight",
        "Tempest",
        "Stronghold",
        "Exodus",
        "Urza's Saga",
        "Urza's Legacy",
        "Urza's Destiny",
        "Mercadian Masques",
        "Ninth Edition",
        "Torment",
        "Judgment",
        "Onslaught",
        "Legions",
        "Scourge",
        "Eighth Edition",
        "Dissension",
        "Guildpact",
        "Ravnica: City of Guilds",
        "Mirrodin",
        "Darksteel",
        "Fifth Dawn",
        "Coldsnap",
        "Time Spiral",
        "Planar Chaos",
        "Future Sight",
        "Lorwyn",
        "Morningtide",
        "Shadowmoor",
        "Eventide",
        "Shards of Alara",
        "Conflux",
        "Alara Reborn",
        "Zendikar",
        "Worldwake",
        "Rise of the Eldrazi",
        "Magic 2010",
        "Scars of Mirrodin",
        "Mirrodin Besieged",
        "Dark Ascension",
        "Avacyn Restored",
        "Magic 2013",
        "Return to Ravnica",
        "Gatecrash",
        "Dragon's Maze",
        "Theros",
        "Born of the Gods",
        "Journey into Nyx",
        "Magic 2015",
        "Khans of Tarkir",
        "Fate Reforged",
        "Dragons of Tarkir",
        "Magic Origins",
        "Battle for Zendikar",
        "Oath of the Gatewatch",
        "Shadows over Innistrad",
        "Eldritch Moon",
        "Kaladesh",
        "Aether Revolt",
        "Amonkhet",
        "Hour of Devastation",
        "Ixalan",
        "Rivals of Ixalan",
        "Dominaria",
        "Core Set 2019",
        "Guilds of Ravnica",
        "Ravnica Allegiance",
        "War of the Spark",
        "Core Set 2020",
        "Throne of Eldraine",
        "Theros: Beyond Death",
        "Ikoria: Lair of Behemoths",
        "Core Set 2021",
        "Zendikar Rising",
        "Kaldheim",
        "Strixhaven: School of Mages",
        "Modern Horizons 2",
        "Dungeons & Dragons: Adventures in the Forgotten Realms",
        "Innistrad: Midnight Hunt",
        "Innistrad: Crimson Vow",
        "Kamigawa: Neon Dynasty",
        "Streets of New Capenna",
        "Unfinity",
        "Dominaria United",
        "The Brothers' War",
        "Phyrexia: All Will Be One",
        "March of the Machine",
        "March of the Machine: The Aftermath",
        "Eldraine Remastered",
        "Lost Caverns of Ixalan",
        "Wilds of Eldraine",
        "The Lost Caverns of Ixalan",
        "Phyrexia: All Will Be One",

        // formats

        "Alchemy",
        "Brawl",
        "Booster Draft",
        "Canadian Highlander",
        "Commander (EDH)",
        "Constructed",
        "Cube Draft",
        "Duel Commander",
        "Extended",
        "Explorer",
        "Frontier",
        "Historic",
        "Historic Brawl",
        "Legacy",
        "Limited",
        "Modern",
        "Oathbreaker",
        "Pauper",
        "Pauper Commander",
        "Pioneer",
        "Premodern",
        "Sealed Deck",
        "Singleton",
        "Standard",
        "Tiny Leaders",
        "Two-Headed Giant",
        "Vintage"
    ];
    

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(null, args), delay);
        };
    };

    // Handle search input change
    const handleSearchChange = debounce((e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = items.filter(item => 
            item.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredItems(filtered);
    }, 300);

    return (
        <>
            <header className="flex-row-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px', backgroundColor: 'grey', color: 'white' }}>
                <h1 style={{ margin: 0 }}>ClobKnocka</h1>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'white', margin: '0 20px' }}></div>
                <h1 style={{ margin: 20 }}>Home</h1>
                <h1 style={{ width: '40px', height: '20px', marginLeft: '10px' }}>Explore</h1>

                {/* Use Next.js Image component */}
                <Image style={{ width: '40px', height: '20px', marginLeft: '40px' }}
                    src="/images/downward-arrow(1).png"  // Image path from public folder
                    alt="."
                    width={500}  // Set the width of the image
                    height={300}  // Set the height of the image
                />

                <h1 style={{ margin: 20 }}>Help</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
                    <h1 style={{ margin: 20, color: 'white' }}>Sign in</h1>
                    <h1 style={{ margin: 20 }}>Register</h1>
                </div>
            </header>

            <main className="flex flex-col justify-center items-center m-5 text-white text-center h-screen bg-white">
                    <h2 className="mb-5">ClubKnocka</h2>  {/* Adds margin-bottom */}
                    <p>A database for Magic: The Gathering</p>
            </main>



            {/* Search bar */}
            <div className="search-container" style={{ textAlign: 'center', margin: '20px 0', color: "black"}}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    placeholder="Search items..." 
                    style={{ padding: '10px', width: '200px', fontSize: '16px' }} 
                />
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filteredItems.map((item, index) => (
                        <li key={index} style={{ padding: '5px', borderBottom: '1px solid #ddd' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="bg-gray-800 text-white text-center py-4 w-full">
                            <p>&copy; Created by Logan and Nathan.</p>
             </footer>

            <style jsx>{`
                header, footer {
                    background-color: #333;
                    color: white;
                    padding: 20px;
                    text-align: center;
                }

                footer {
                    padding: 10px;
                }

                .hidden {
                    display: none;
                }

                .visible {
                    display: block;
                }
            `}</style>
        </>
    );
}
