/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entities/productionmat.ts":
/*!***************************************!*\
  !*** ./src/entities/productionmat.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionMat = void 0;
var Mqtt = __webpack_require__(/*! mqtt */ "./node_modules/mqtt/lib/connect/index.js");
var ProductionMat = /** @class */ (function () {
    function ProductionMat(id, mat, effect) {
        var _this = this;
        this.mat = mat;
        this.effect = effect;
        this.acceleration = 10;
        this.meters = 10;
        this.maxSpeed = 8;
        this.setAcceleration();
        this.id = id;
        this.mat.setInteractive();
        this.mat.on('pointerup', function () {
            var modal = document.getElementById("modal");
            modal.className = "modal " + _this.id;
        });
        var client = Mqtt.connect('mqtt://localhost:1885');
        client.on('connect', function () {
            client.subscribe('presence', function (err) {
                if (!err) {
                    client.publish('presence', 'Hello mqtt');
                }
            });
        });
        client.on('message', function (topic, message) {
            // message is Buffer
            console.log(message.toString());
            client.end();
        });
    }
    /**
    * Para de acelerar quando chega na velocidade limite.
    */
    ProductionMat.prototype.checkVelocityConstraint = function () {
        if (Math.abs(this.getVelocity()) >= this.maxSpeed &&
            // Razão > 0 implica que a esteira vai mudar sentido.
            this.acceleration / this.getVelocity() > 0) {
            this.setAcceleration(0);
        }
    };
    /**
    * Define aceleração da esteira. Recebe em m/s². Transforma em px/s²
    */
    ProductionMat.prototype.setAcceleration = function (acceleration) {
        if (acceleration !== undefined) {
            acceleration = (acceleration * this.mat.width) / this.meters;
            this.acceleration = acceleration;
        }
        this.effect.setAcceleration(this.acceleration, 0);
    };
    /**
    * Retorna velocidade da esteira.
    */
    ProductionMat.prototype.getVelocity = function () {
        return (this.effect.body.velocity.x * this.meters) / this.mat.width;
    };
    ProductionMat.prototype.getAcceleration = function () {
        return (this.acceleration * this.meters) / this.mat.width;
    };
    /**
    * Para a esteira de vez.
    */
    ProductionMat.prototype.stop = function () {
        this.effect.setVelocity(0, 0);
        this.setAcceleration(0);
    };
    /**
    * Inicia a esteira.
    */
    ProductionMat.prototype.start = function () {
        this.setAcceleration(.15);
        console.log("Start: ", this.acceleration);
    };
    /**
    * Da o efeito de loop.
    */
    ProductionMat.prototype.reset = function () {
        var offset = this.mat.width / 2 - this.effect.width / 2;
        var velocity = this.getVelocity();
        if (velocity < 0 && this.effect.x < this.mat.x - offset) {
            this.effect.x = this.mat.x + offset;
        }
        else if (this.effect.x > this.mat.x + offset) {
            this.effect.x = this.mat.x - offset;
        }
    };
    ProductionMat.prototype.reverse = function () {
        if (this.acceleration === 0) {
            // + 1, if right. -1 if left.
            this.acceleration = this.getVelocity() / Math.abs(this.getVelocity());
            this.acceleration *= 10;
        }
        // turn to oposite.
        this.acceleration *= -1;
        this.setAcceleration();
    };
    /**
     * Um modal tem duas classes específicas que servem como identificadores.
     * A primeira é um número que representa o id da esteira em questão.
     * O segundo é a classe alreadySet que serve para indicar que os elementos
     * não-atualizaveis do modal já foram setados.
     */
    ProductionMat.prototype.displayInfo = function () {
        var _this = this;
        var modal = document.getElementById("modal");
        if (modal.classList.contains(this.id)) {
            var name_1 = document.getElementById("name");
            name_1.innerHTML = "\n        Esteira " + this.id + "\n      ";
            var velocity = document.getElementById("velocity");
            velocity.innerHTML = "\n       Velocidade : " + this.getVelocity().toFixed(2) + " m/s <br/>\n       Acelera\u00E7\u00E3o : " + this.getAcceleration().toFixed(2) + " m/s\u00B2\n      ";
            var size = document.getElementById("size");
            size.innerHTML = "\n        Tamanho : " + this.meters + " m. \n      ";
            if (!modal.classList.contains("alreadySet")) {
                var reverse = document.getElementById("reverse");
                var onReverse = this.reverse.bind(this);
                reverse.onclick = onReverse;
                var stop_1 = document.getElementById("stop");
                var onStop = this.stop.bind(this);
                stop_1.onclick = onStop;
                var start = document.getElementById("start");
                var onStart = this.start.bind(this);
                start.onclick = onStart;
                var acceleration = document.getElementById("acceleration");
                acceleration.value = this.getAcceleration().toFixed(2).toString();
                acceleration.onkeypress = function (e) {
                    var target = e.target;
                    _this.setAcceleration(parseFloat(target.value));
                };
                modal.classList.add("alreadySet");
            }
        }
    };
    ProductionMat.prototype.update = function () {
        //this.effect.setVelocity(this.speed,0)
        this.checkVelocityConstraint();
        this.reset();
        this.displayInfo();
    };
    return ProductionMat;
}());
exports.ProductionMat = ProductionMat;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameHeight = exports.getGameWidth = void 0;
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: scenes_1.default,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#FFFFFF',
};
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    exports.game.scale.refresh();
});


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = helpers_1.getGameWidth(this) * 0.5;
        var halfHeight = helpers_1.getGameHeight(this) * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = value * 100;
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start('MainMenu');
        });
        this.loadAssets();
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        // Load sample assets
        // Source: Open Game Art
        this.load.image('mat', 'assets/01.png');
        this.load.image('mat_effect', 'assets/02.png');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var simulator_1 = __webpack_require__(/*! ./simulator */ "./src/scenes/simulator.ts");
exports.default = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    simulator_1.Simulator,
];


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuScene = void 0;
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        this.add.text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', { fill: '#FFFFFF' }).setFontSize(24);
        new menu_button_1.MenuButton(this, 100, 150, 'Start Simulation', function () {
            _this.scene.start('Game');
        });
        new menu_button_1.MenuButton(this, 100, 250, 'Settings', function () { return console.log('settings button clicked'); });
        new menu_button_1.MenuButton(this, 100, 350, 'Help', function () { return console.log('help button clicked'); });
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/simulator.ts":
/*!*********************************!*\
  !*** ./src/scenes/simulator.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulator = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var productionmat_ts_1 = __webpack_require__(/*! ../entities/productionmat.ts */ "./src/entities/productionmat.ts");
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var Simulator = /** @class */ (function (_super) {
    __extends(Simulator, _super);
    function Simulator() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.productionMats = [];
        _this.objects = [];
        return _this;
    }
    Simulator.prototype.create = function () {
        var _this = this;
        new menu_button_1.MenuButton(this, 100, 100, 'Insert', function () {
            _this.pushProductionMat();
        });
        new menu_button_1.MenuButton(this, 100, 200, 'Remove', function () {
            _this.popProductionMat();
        });
        this.productionMatsIds = this.add.text(100, 50, "IDs: ", { fill: '#000000' }).setFontSize(18);
        //this.textSizeMatMeters = this.add.text(100, 75, 'Meters: 10', { fill: '#000000' }).setFontSize(18);
    };
    Simulator.prototype.update = function () {
        //this.textVelocity.setText('Velocity: ' + this.productionMat.getVelocity().toFixed(2) + 'm/s')
        this.productionMats.map(function (mat) {
            mat.update();
        });
    };
    Simulator.prototype.pushProductionMat = function () {
        var mat = this.physics.add.sprite(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'mat');
        var effect = this.physics.add.sprite(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'mat_effect');
        effect.y -= effect.height / 4;
        var productionMat = new productionmat_ts_1.ProductionMat(this.productionMats.length, mat, effect);
        this.productionMatsIds.text += this.productionMats.length.toString() + ',';
        this.productionMats.push(productionMat);
        this.redraw();
    };
    Simulator.prototype.popProductionMat = function () {
        var pmat = this.productionMats.pop();
        var ids = this.productionMatsIds.text.split(":")[1].split(",");
        var prefix = this.productionMatsIds.text.split(":")[0];
        //ids: "0,1," Antes do split
        //ids: ["0", "1", ""] Depois do split
        ids.splice(ids.length - 2, 1);
        //ids: ["0", ""] Depois do splice
        this.productionMatsIds.text = prefix + ":" + ids.join(",");
        pmat.mat.destroy();
        pmat.effect.destroy();
        this.redraw();
    };
    Simulator.prototype.redraw = function () {
        var totalMats = this.productionMats.length;
        /**
         * Agora, é necessário descobrir os N centros.
         * Em cada centro será desenhado uma esteira.
         */
        var heightOffset = helpers_1.getGameHeight(this) / totalMats;
        var height = 0.0;
        this.productionMats.map(function (pmat) {
            pmat.mat.y = (height + heightOffset) / 2;
            pmat.effect.y = (height + heightOffset) / 2;
            pmat.effect.y -= pmat.effect.height / 4;
            height += heightOffset;
        });
    };
    return Simulator;
}(Phaser.Scene));
exports.Simulator = Simulator;


/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var padding = 10;
var minimumWidth = 200;
var minimumHeight = 50;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add.text(x + padding, y + padding, text).setFontSize(18).setAlign('center');
        var labelWidth = _this.label.width + padding;
        var labelHeight = _this.label.height + padding;
        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    MenuButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    return MenuButton;
}(Phaser.GameObjects.Rectangle));
exports.MenuButton = MenuButton;


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*********************!*\
  !*** net (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** tls (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL3Byb2R1Y3Rpb25tYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ib290LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zaW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL21lbnUtYnV0dG9uLnRzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT9kMzY1Iiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8zYTM1Iiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/NDE4ZCIsIndlYnBhY2s6Ly8vbmV0IChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdGxzIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/MDhlYyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/ZjIxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztR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VTs7Ozs7Ozs7Ozs7O0FDTnZCLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0ICogYXMgTXF0dCBmcm9tICdtcXR0J1xuXG5jbGFzcyBQcm9kdWN0aW9uTWF0IHtcblxuICBwdWJsaWMgbWF0OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlXG4gIHB1YmxpYyBlZmZlY3Q6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGVcbiAgcHVibGljIGlkOiBzdHJpbmdcbiAgLyoqXG4gICAqIG1heFNwZWVkIGVtIG0vc1xuICAgKi9cbiAgcHVibGljIG1heFNwZWVkOiBudW1iZXJcbiAgcHVibGljIGFjY2VsZXJhdGlvbjogbnVtYmVyXG4gIC8qKlxuICAqIFRhbWFuaG8gZGEgZXN0ZWlyYSBlbSBtZXRyb3MuXG4gICogVXNhZG8gcGFyYSB0cmFuc2Zvcm1hw6fDtWVzLlxuICAqL1xuICBwdWJsaWMgbWV0ZXJzOiBudW1iZXJcbiAgY29uc3RydWN0b3IoaWQsIG1hdCwgZWZmZWN0KSB7XG4gICAgdGhpcy5tYXQgPSBtYXRcbiAgICB0aGlzLmVmZmVjdCA9IGVmZmVjdFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMTBcbiAgICB0aGlzLm1ldGVycyA9IDEwXG4gICAgdGhpcy5tYXhTcGVlZCA9IDhcbiAgICB0aGlzLnNldEFjY2VsZXJhdGlvbigpXG4gICAgdGhpcy5pZCA9IGlkXG5cbiAgICB0aGlzLm1hdC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgdGhpcy5tYXQub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIilcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSA9IGBtb2RhbCAke3RoaXMuaWR9YFxuICAgIH0pXG5cbiAgICBsZXQgY2xpZW50ID0gTXF0dC5jb25uZWN0KCdtcXR0Oi8vbG9jYWxob3N0OjE4ODUnKVxuICAgIGNsaWVudC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsaWVudC5zdWJzY3JpYmUoJ3ByZXNlbmNlJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgIGNsaWVudC5wdWJsaXNoKCdwcmVzZW5jZScsICdIZWxsbyBtcXR0JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgICBcbiAgICBjbGllbnQub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiAodG9waWMsIG1lc3NhZ2UpIHtcbiAgICAgIC8vIG1lc3NhZ2UgaXMgQnVmZmVyXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLnRvU3RyaW5nKCkpXG4gICAgICBjbGllbnQuZW5kKClcbiAgICB9KVxuICB9XG5cbiAgLyoqIFxuICAqIFBhcmEgZGUgYWNlbGVyYXIgcXVhbmRvIGNoZWdhIG5hIHZlbG9jaWRhZGUgbGltaXRlLlxuICAqL1xuICBwdWJsaWMgY2hlY2tWZWxvY2l0eUNvbnN0cmFpbnQoKSB7XG4gICAgaWYgKE1hdGguYWJzKHRoaXMuZ2V0VmVsb2NpdHkoKSkgPj0gdGhpcy5tYXhTcGVlZCAmJlxuICAgICAgLy8gUmF6w6NvID4gMCBpbXBsaWNhIHF1ZSBhIGVzdGVpcmEgdmFpIG11ZGFyIHNlbnRpZG8uXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiAvIHRoaXMuZ2V0VmVsb2NpdHkoKSA+IDApIHtcbiAgICAgIHRoaXMuc2V0QWNjZWxlcmF0aW9uKDApXG4gICAgfVxuICB9XG4gIC8qKlxuICAqIERlZmluZSBhY2VsZXJhw6fDo28gZGEgZXN0ZWlyYS4gUmVjZWJlIGVtIG0vc8KyLiBUcmFuc2Zvcm1hIGVtIHB4L3PCslxuICAqL1xuICBwdWJsaWMgc2V0QWNjZWxlcmF0aW9uKGFjY2VsZXJhdGlvbj86IG51bWJlcikge1xuICAgIGlmIChhY2NlbGVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWNjZWxlcmF0aW9uID0gKGFjY2VsZXJhdGlvbiAqIHRoaXMubWF0LndpZHRoKSAvIHRoaXMubWV0ZXJzXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IGFjY2VsZXJhdGlvblxuICAgIH1cbiAgICB0aGlzLmVmZmVjdC5zZXRBY2NlbGVyYXRpb24odGhpcy5hY2NlbGVyYXRpb24sIDApXG4gIH1cbiAgLyoqXG4gICogUmV0b3JuYSB2ZWxvY2lkYWRlIGRhIGVzdGVpcmEuXG4gICovXG4gIHB1YmxpYyBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKHRoaXMuZWZmZWN0LmJvZHkudmVsb2NpdHkueCAqIHRoaXMubWV0ZXJzKSAvIHRoaXMubWF0LndpZHRoXG4gIH1cblxuICBwdWJsaWMgZ2V0QWNjZWxlcmF0aW9uKCl7XG4gICAgcmV0dXJuICh0aGlzLmFjY2VsZXJhdGlvbiAqIHRoaXMubWV0ZXJzKSAvIHRoaXMubWF0LndpZHRoXG4gIH1cbiAgLyoqXG4gICogUGFyYSBhIGVzdGVpcmEgZGUgdmV6LlxuICAqL1xuICBwdWJsaWMgc3RvcCgpIHtcbiAgICB0aGlzLmVmZmVjdC5zZXRWZWxvY2l0eSgwLCAwKVxuICAgIHRoaXMuc2V0QWNjZWxlcmF0aW9uKDApXG4gIH1cblxuICAvKipcbiAgKiBJbmljaWEgYSBlc3RlaXJhLlxuICAqL1xuICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgdGhpcy5zZXRBY2NlbGVyYXRpb24oLjE1KVxuICAgIGNvbnNvbGUubG9nKFwiU3RhcnQ6IFwiLHRoaXMuYWNjZWxlcmF0aW9uKVxuICB9XG5cbiAgLyoqIFxuICAqIERhIG8gZWZlaXRvIGRlIGxvb3AuXG4gICovXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5tYXQud2lkdGggLyAyIC0gdGhpcy5lZmZlY3Qud2lkdGggLyAyXG4gICAgbGV0IHZlbG9jaXR5ID0gdGhpcy5nZXRWZWxvY2l0eSgpXG4gICAgaWYgKHZlbG9jaXR5IDwgMCAmJiB0aGlzLmVmZmVjdC54IDwgdGhpcy5tYXQueCAtIG9mZnNldCkge1xuICAgICAgdGhpcy5lZmZlY3QueCA9IHRoaXMubWF0LnggKyBvZmZzZXRcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWZmZWN0LnggPiB0aGlzLm1hdC54ICsgb2Zmc2V0KSB7XG4gICAgICB0aGlzLmVmZmVjdC54ID0gdGhpcy5tYXQueCAtIG9mZnNldFxuICAgIH1cblxuICB9XG5cbiAgcHVibGljIHJldmVyc2UoKSB7XG4gICAgaWYgKHRoaXMuYWNjZWxlcmF0aW9uID09PSAwKSB7XG4gICAgICAvLyArIDEsIGlmIHJpZ2h0LiAtMSBpZiBsZWZ0LlxuICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmdldFZlbG9jaXR5KCkgLyBNYXRoLmFicyh0aGlzLmdldFZlbG9jaXR5KCkpXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiAqPSAxMFxuICAgIH1cbiAgICAvLyB0dXJuIHRvIG9wb3NpdGUuXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gKj0gLTFcbiAgICB0aGlzLnNldEFjY2VsZXJhdGlvbigpXG4gIH1cblxuICAvKipcbiAgICogVW0gbW9kYWwgdGVtIGR1YXMgY2xhc3NlcyBlc3BlY8OtZmljYXMgcXVlIHNlcnZlbSBjb21vIGlkZW50aWZpY2Fkb3Jlcy5cbiAgICogQSBwcmltZWlyYSDDqSB1bSBuw7ptZXJvIHF1ZSByZXByZXNlbnRhIG8gaWQgZGEgZXN0ZWlyYSBlbSBxdWVzdMOjby5cbiAgICogTyBzZWd1bmRvIMOpIGEgY2xhc3NlIGFscmVhZHlTZXQgcXVlIHNlcnZlIHBhcmEgaW5kaWNhciBxdWUgb3MgZWxlbWVudG9zXG4gICAqIG7Do28tYXR1YWxpemF2ZWlzIGRvIG1vZGFsIGrDoSBmb3JhbSBzZXRhZG9zLlxuICAgKi9cbiAgcHVibGljIGRpc3BsYXlJbmZvKCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIilcblxuICAgIGlmIChtb2RhbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5pZCkpIHtcbiAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpXG4gICAgICBuYW1lLmlubmVySFRNTCA9IGBcbiAgICAgICAgRXN0ZWlyYSAke3RoaXMuaWR9XG4gICAgICBgXG4gICAgICBsZXQgdmVsb2NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbG9jaXR5XCIpXG4gICAgICB2ZWxvY2l0eS5pbm5lckhUTUwgPSBgXG4gICAgICAgVmVsb2NpZGFkZSA6ICR7dGhpcy5nZXRWZWxvY2l0eSgpLnRvRml4ZWQoMil9IG0vcyA8YnIvPlxuICAgICAgIEFjZWxlcmHDp8OjbyA6ICR7dGhpcy5nZXRBY2NlbGVyYXRpb24oKS50b0ZpeGVkKDIpfSBtL3PCslxuICAgICAgYFxuICAgICAgbGV0IHNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpemVcIilcbiAgICAgIHNpemUuaW5uZXJIVE1MID0gYFxuICAgICAgICBUYW1hbmhvIDogJHt0aGlzLm1ldGVyc30gbS4gXG4gICAgICBgXG5cbiAgICAgIGlmICghbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxyZWFkeVNldFwiKSkge1xuICAgICAgICBsZXQgcmV2ZXJzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmV2ZXJzZVwiKVxuICAgICAgICBsZXQgb25SZXZlcnNlID0gdGhpcy5yZXZlcnNlLmJpbmQodGhpcylcbiAgICAgICAgcmV2ZXJzZS5vbmNsaWNrID0gb25SZXZlcnNlXG5cbiAgICAgICAgbGV0IHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3BcIilcbiAgICAgICAgbGV0IG9uU3RvcCA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpXG4gICAgICAgIHN0b3Aub25jbGljayA9IG9uU3RvcFxuXG4gICAgICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcbiAgICAgICAgbGV0IG9uU3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcylcbiAgICAgICAgc3RhcnQub25jbGljayA9IG9uU3RhcnRcblxuICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZWxlcmF0aW9uXCIpXG4gICAgICAgIGFjY2VsZXJhdGlvbi52YWx1ZSA9IHRoaXMuZ2V0QWNjZWxlcmF0aW9uKCkudG9GaXhlZCgyKS50b1N0cmluZygpXG4gICAgICAgIGFjY2VsZXJhdGlvbi5vbmtleXByZXNzID0gKGUpID0+IHtcbiAgICAgICAgICBsZXQgdGFyZ2V0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZS50YXJnZXRcbiAgICAgICAgICB0aGlzLnNldEFjY2VsZXJhdGlvbihwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSkpXG4gICAgICAgIH1cblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWxyZWFkeVNldFwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgLy90aGlzLmVmZmVjdC5zZXRWZWxvY2l0eSh0aGlzLnNwZWVkLDApXG4gICAgdGhpcy5jaGVja1ZlbG9jaXR5Q29uc3RyYWludCgpXG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kaXNwbGF5SW5mbygpXG5cbiAgfVxuXG59XG5cbmV4cG9ydCB7IFByb2R1Y3Rpb25NYXQgfSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbiAgfTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcyc7XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU2FtcGxlJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgcGFyZW50OiAnZ2FtZScsXG4gIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xufSk7XG4iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdCb290Jyxcbn07XG5cbi8qKlxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBsb2FkcyBhbGwgbmVjZXNzYXJ5IGFzc2V0cyB0byB0aGUgZ2FtZSBhbmQgZGlzcGxheXMgYSBsb2FkaW5nIGJhci5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNTtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNTtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDA7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGgsIGhhbGZIZWlnaHQsIHByb2dyZXNzQmFyV2lkdGgsIHByb2dyZXNzQmFySGVpZ2h0LCAweDAwMDAwMCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSwgaGFsZkhlaWdodCwgMTAsIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsIDB4ODg4ODg4KTtcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWUpID0+IHtcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZTtcblxuICAgICAgY29uc3QgcGVyY2VudCA9IHZhbHVlICogMTAwO1xuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KCk7XG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpO1xuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpO1xuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpO1xuXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkQXNzZXRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIGFzc2V0cyB0aGF0IG5lZWQgdG8gYmUgbG9hZGVkIGJ5IHRoZSBnYW1lIChzcHJpdGVzLCBpbWFnZXMsIGFuaW1hdGlvbnMsIHRpbGVzLCBtdXNpYywgZXRjKVxuICAgKiBzaG91bGQgYmUgYWRkZWQgdG8gdGhpcyBtZXRob2QuIE9uY2UgbG9hZGVkIGluLCB0aGUgbG9hZGVyIHdpbGwga2VlcCB0cmFjayBvZiB0aGVtLCBpbmRlcGVkZW50IG9mIHdoaWNoIHNjZW5lXG4gICAqIGlzIGN1cnJlbnRseSBhY3RpdmUsIHNvIHRoZXkgY2FuIGJlIGFjY2Vzc2VkIGFueXdoZXJlLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xuICAgIC8vIExvYWQgc2FtcGxlIGFzc2V0c1xuXG4gICAgLy8gU291cmNlOiBPcGVuIEdhbWUgQXJ0XG4gICAgdGhpcy5sb2FkLmltYWdlKCdtYXQnLCAnYXNzZXRzLzAxLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbWF0X2VmZmVjdCcsICdhc3NldHMvMDIucG5nJylcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnO1xuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcbmltcG9ydCB7IFNpbXVsYXRvciB9IGZyb20gJy4vc2ltdWxhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBCb290U2NlbmUsXG4gIE1haW5NZW51U2NlbmUsXG4gIFNpbXVsYXRvcixcbl07XG4iLCJpbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn07XG5cbi8qKlxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxuICovXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgdGhpcy5hZGQudGV4dCgxMDAsIDUwLCAnVGhpcyBpcyBhIHNhbXBsZSBtYWluIG1lbnUuIENsaWNrIHRoZSBcIlN0YXJ0XCIgYnV0dG9uIGJlbG93IHRvIHJ1biB5b3VyIGdhbWUuJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdTdGFydCBTaW11bGF0aW9uJywgKCkgPT4ge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xuICAgIH0pO1xuXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyNTAsICdTZXR0aW5ncycsICgpID0+IGNvbnNvbGUubG9nKCdzZXR0aW5ncyBidXR0b24gY2xpY2tlZCcpKTtcblxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMzUwLCAnSGVscCcsICgpID0+IGNvbnNvbGUubG9nKCdoZWxwIGJ1dHRvbiBjbGlja2VkJykpO1xuICB9XG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IFByb2R1Y3Rpb25NYXQgfSBmcm9tICcuLi9lbnRpdGllcy9wcm9kdWN0aW9ubWF0LnRzJztcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59O1xuXG5leHBvcnQgY2xhc3MgU2ltdWxhdG9yIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICBwcm9kdWN0aW9uTWF0czogQXJyYXk8UHJvZHVjdGlvbk1hdD4gPSBbXVxuICBwcm9kdWN0aW9uTWF0c0lkczogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgb2JqZWN0czogQXJyYXk8UGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZT4gPSBbXVxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcblxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTAwLCAnSW5zZXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5wdXNoUHJvZHVjdGlvbk1hdCgpXG4gICAgfSk7XG5cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDIwMCwgJ1JlbW92ZScsICgpID0+IHtcbiAgICAgIHRoaXMucG9wUHJvZHVjdGlvbk1hdCgpXG4gICAgfSk7XG5cblxuICAgIHRoaXMucHJvZHVjdGlvbk1hdHNJZHMgPSB0aGlzLmFkZC50ZXh0KDEwMCwgNTAsIFwiSURzOiBcIiwgeyBmaWxsOiAnIzAwMDAwMCcgfSkuc2V0Rm9udFNpemUoMTgpO1xuICAgIC8vdGhpcy50ZXh0U2l6ZU1hdE1ldGVycyA9IHRoaXMuYWRkLnRleHQoMTAwLCA3NSwgJ01ldGVyczogMTAnLCB7IGZpbGw6ICcjMDAwMDAwJyB9KS5zZXRGb250U2l6ZSgxOCk7XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgLy90aGlzLnRleHRWZWxvY2l0eS5zZXRUZXh0KCdWZWxvY2l0eTogJyArIHRoaXMucHJvZHVjdGlvbk1hdC5nZXRWZWxvY2l0eSgpLnRvRml4ZWQoMikgKyAnbS9zJylcbiAgICB0aGlzLnByb2R1Y3Rpb25NYXRzLm1hcCgobWF0KSA9PiB7XG4gICAgICBtYXQudXBkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHB1c2hQcm9kdWN0aW9uTWF0KCkge1xuICAgIGxldCBtYXQgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZShnZXRHYW1lV2lkdGgodGhpcykgLyAyLCBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMiwgJ21hdCcpXG5cbiAgICBsZXQgZWZmZWN0ID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMiwgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsICdtYXRfZWZmZWN0JylcbiAgICBlZmZlY3QueSAtPSBlZmZlY3QuaGVpZ2h0IC8gNFxuXG4gICAgbGV0IHByb2R1Y3Rpb25NYXQgPSBuZXcgUHJvZHVjdGlvbk1hdCh0aGlzLnByb2R1Y3Rpb25NYXRzLmxlbmd0aCwgbWF0LCBlZmZlY3QpXG4gICAgdGhpcy5wcm9kdWN0aW9uTWF0c0lkcy50ZXh0ICs9IHRoaXMucHJvZHVjdGlvbk1hdHMubGVuZ3RoLnRvU3RyaW5nKCkgKyAnLCdcblxuICAgIHRoaXMucHJvZHVjdGlvbk1hdHMucHVzaChwcm9kdWN0aW9uTWF0KVxuXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG5cbiAgcHVibGljIHBvcFByb2R1Y3Rpb25NYXQoKSB7XG4gICAgbGV0IHBtYXQgPSB0aGlzLnByb2R1Y3Rpb25NYXRzLnBvcCgpXG4gICAgbGV0IGlkcyA9IHRoaXMucHJvZHVjdGlvbk1hdHNJZHMudGV4dC5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCIsXCIpXG4gICAgbGV0IHByZWZpeCA9IHRoaXMucHJvZHVjdGlvbk1hdHNJZHMudGV4dC5zcGxpdChcIjpcIilbMF1cbiAgICAvL2lkczogXCIwLDEsXCIgQW50ZXMgZG8gc3BsaXRcbiAgICAvL2lkczogW1wiMFwiLCBcIjFcIiwgXCJcIl0gRGVwb2lzIGRvIHNwbGl0XG4gICAgaWRzLnNwbGljZShpZHMubGVuZ3RoLTIsMSlcbiAgICAvL2lkczogW1wiMFwiLCBcIlwiXSBEZXBvaXMgZG8gc3BsaWNlXG4gICAgdGhpcy5wcm9kdWN0aW9uTWF0c0lkcy50ZXh0ID0gcHJlZml4ICsgXCI6XCIgKyBpZHMuam9pbihcIixcIilcbiAgICBwbWF0Lm1hdC5kZXN0cm95KClcbiAgICBwbWF0LmVmZmVjdC5kZXN0cm95KClcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cblxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGxldCB0b3RhbE1hdHMgPSB0aGlzLnByb2R1Y3Rpb25NYXRzLmxlbmd0aFxuICAgIC8qKlxuICAgICAqIEFnb3JhLCDDqSBuZWNlc3PDoXJpbyBkZXNjb2JyaXIgb3MgTiBjZW50cm9zLlxuICAgICAqIEVtIGNhZGEgY2VudHJvIHNlcsOhIGRlc2VuaGFkbyB1bWEgZXN0ZWlyYS5cbiAgICAgKi9cbiAgICBsZXQgaGVpZ2h0T2Zmc2V0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAvIHRvdGFsTWF0c1xuICAgIGxldCBoZWlnaHQgPSAwLjBcbiAgICB0aGlzLnByb2R1Y3Rpb25NYXRzLm1hcCgocG1hdCkgPT4ge1xuICAgICAgcG1hdC5tYXQueSA9IChoZWlnaHQgKyBoZWlnaHRPZmZzZXQpIC8gMlxuICAgICAgcG1hdC5lZmZlY3QueSA9IChoZWlnaHQgKyBoZWlnaHRPZmZzZXQpIC8gMlxuICAgICAgcG1hdC5lZmZlY3QueSAtPSBwbWF0LmVmZmVjdC5oZWlnaHQgLyA0XG4gICAgICBoZWlnaHQgKz0gaGVpZ2h0T2Zmc2V0XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmNvbnN0IHBhZGRpbmcgPSAxMDtcbmNvbnN0IG1pbmltdW1XaWR0aCA9IDIwMDtcbmNvbnN0IG1pbmltdW1IZWlnaHQgPSA1MDtcblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApO1xuXG4gICAgdGhpcy5sYWJlbCA9IHNjZW5lLmFkZC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dCkuc2V0Rm9udFNpemUoMTgpLnNldEFsaWduKCdjZW50ZXInKTtcblxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgcGFkZGluZztcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZztcblxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IG1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiBtaW5pbXVtV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSBtaW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiBtaW5pbXVtSGVpZ2h0O1xuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpO1xuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIHRoaXMub24oJ3BvaW50ZXJ1cCcsIG9uQ2xpY2spO1xuICAgIH1cblxuICAgIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpO1xuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NCk7XG4gIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=