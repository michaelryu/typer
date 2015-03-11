angular.module("App", ["ui.utils"])
  .controller("MainController", function ($scope) {
    var main = this;
    var words = ["threatening", "scribble", "hug", "wrap", "knock", "racial", "many", "need", "attract", "hissing", "taste", "cooperative", "fragile", "cast", "coach", "balance", "complain", "puzzling", "cars", "sincere", "draconian", "name", "finger", "frail", "versed", "talented", "saw", "brother", "quack", "hard", "throat", "slip", "cows", "gaping", "teeny", "useless", "search", "alarm", "pest", "protest", "exotic", "bat", "van", "whispering", "doubtful", "massive", "punish", "obnoxious", "past", "attend", "attack", "wipe", "arrest", "improve", "true", "bells", "sister", "general", "foot", "buzz", "encouraging", "gruesome", "design", "disappear", "boundary", "bored", "poised", "recondite", "interest", "trip", "jumpy", "underwear", "giddy", "baby", "rely", "muddle", "pleasant", "unwieldy", "handy", "dock", "stamp", "rub", "milk", "tap", "acoustics", "tangible", "guess", "shame", "sea", "rare", "dogs", "abrupt", "dizzy", "funny", "statuesque", "heavy", "physical", "kill", "remind", "watery", "crib", "screw", "hellish", "wrestle", "invincible", "sin", "smelly", "sort", "modern", "increase", "enthusiastic", "disarm", "furtive", "transport", "shaggy", "paper", "dazzling", "irate", "wide", "tame", "right", "shock", "immense", "trail", "rose", "river", "communicate", "haunt", "zippy", "prefer", "rainstorm", "dramatic", "vagabond", "well ", "off", "shock", "print", "unkempt", "tremble", "vast", "shirt", "blush", "old ", "fashioned", "lunchroom", "painstaking", "mature", "fit", "fence", "wry", "skillful", "chance", "quaint", "afraid", "private", "adjoining", "peep", "radiate", "rabid", "boil", "fine", "inject", "petite", "hate", "possible", "note", "play", "receipt", "juice", "cry", "quill", "card", "hushed", "beam", "skip", "sharp", "loud", "spill", "skate", "bleach", "lonely", "silent", "third", "bee", "exercise", "sense", "like", "report", "common", "womanly", "degree", "fish", "sticks", "freezing", "chew", "accidental", "repair", "curvy", "lunch", "guarantee", "worm", "comb", "mom", "cherry", "pig", "authority", "health", "reaction", "cannon", "hulking", "meek", "sturdy", "moon", "melt", "argument", "plain", "even", "daily", "roasted", "wiggly", "bump", "develop", "teeth", "letter", "competition", "bolt", "word", "person", "tasty", "obscene", "woebegone", "agreeable", "nutty", "invention", "near", "realise", "drip", "oranges", "helpful", "eggnog", "whistle", "husky", "snatch", "angle", "discreet", "spare", "hot", "profuse", "bomb", "curve", "interfere", "unusual", "acoustic", "glove", "store", "zoom", "fluffy", "unadvised", "plough", "substance", "trap", "alert", "army", "panicky", "nation", "tomatoes", "legal", "lyrical", "list", "fantastic", "upset", "animal", "able", "pancake", "stiff", "rice", "spooky", "productive", "heavenly", "attach", "bless", "crack", "mountain", "rabbit", "yoke", "brash", "bouncy", "pie", "fold", "fast", "volatile", "nerve", "yellow", "watch", "wander", "splendid", "adhesive", "next", "cart"];
    main.counter = 0;
    main.correct = 0;
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    main.i = 0;
    main.words = shuffleArray(words);
    main.nextWord = function ($event) {
      console.log("yolo!");
      main.counter++;
      if (main.type === main.words[main.i]) {
        main.correct++;
      }
      main.i++;
      main.type = "";
    }
  })
;