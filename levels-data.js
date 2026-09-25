const levelsData = [
    {
        id: "0",
        number: "Level 0",
        name: "The Lobby",
        file: "levels/level-0.html",
        difficulty: "Class 0: Safe",
        tags: ["Inside", "Safe", "Humming"],
        isSublevel: false
    },
    {
        id: "0.1",
        number: "Level 0.1",
        name: "eww",
        file: "levels/level-0.1.html",
        difficulty: "Class 1: Low Hazard",
        tags: ["Inside", "Dark"],
        isSublevel: true // Indents this level under Level 0
    },
    {
        id: "1",
        number: "Level 1",
        name: "Empty Garage",
        file: "levels/level-1.html",
        difficulty: "Class 1: Low Hazard",
        tags: ["Inside", "Dark", "Cold"],
        isSublevel: false
    }
];
