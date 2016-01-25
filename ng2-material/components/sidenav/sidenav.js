var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var backdrop_1 = require("../backdrop/backdrop");
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var core_4 = require("angular2/core");
var core_5 = require("angular2/core");
var core_6 = require("angular2/core");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var core_7 = require("angular2/core");
var core_8 = require("angular2/core");
var lang_1 = require("angular2/src/facade/lang");
var sidenav_service_1 = require("./sidenav_service");
var SidenavAlignment = (function () {
    function SidenavAlignment() {
    }
    SidenavAlignment.LEFT = 'left';
    SidenavAlignment.RIGHT = 'right';
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], SidenavAlignment, "LEFT", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], SidenavAlignment, "RIGHT", void 0);
    SidenavAlignment = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], SidenavAlignment);
    return SidenavAlignment;
})();
exports.SidenavAlignment = SidenavAlignment;
var SidenavStyle = (function () {
    function SidenavStyle() {
    }
    SidenavStyle.OVER = 'over';
    SidenavStyle.SIDE = 'side';
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], SidenavStyle, "OVER", void 0);
    __decorate([
        lang_1.CONST(), 
        __metadata('design:type', Object)
    ], SidenavStyle, "SIDE", void 0);
    SidenavStyle = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], SidenavStyle);
    return SidenavStyle;
})();
exports.SidenavStyle = SidenavStyle;
var MdSidenav = (function (_super) {
    __extends(MdSidenav, _super);
    function MdSidenav(element, service) {
        _super.call(this, element);
        this.element = element;
        this.service = service;
        this.name = 'default';
        this._align = SidenavAlignment.LEFT;
        this._style = SidenavStyle.OVER;
        this.backdropRef = null;
        this.transitionClass = 'md-closed';
        this.transitionAddClass = false;
        dom_adapter_1.DOM.addClass(this.element.nativeElement, this.transitionClass);
    }
    Object.defineProperty(MdSidenav.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (value) {
            this._align = value === SidenavAlignment.RIGHT ? SidenavAlignment.RIGHT : SidenavAlignment.LEFT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (value) {
            this._style = value === SidenavStyle.SIDE ? SidenavStyle.SIDE : SidenavStyle.OVER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "opened", {
        get: function () {
            return this.visible;
        },
        set: function (value) {
            this.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    MdSidenav.prototype.ngOnInit = function () {
        this.service.register(this);
    };
    MdSidenav.prototype.ngOnDestroy = function () {
        this.service.unregister(this);
    };
    MdSidenav.prototype.toggle = function (visible) {
        if (this.backdropRef) {
            this.backdropRef.toggle(visible);
        }
        return _super.prototype.toggle.call(this, visible);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdSidenav.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdSidenav.prototype, "align", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdSidenav.prototype, "style", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdSidenav.prototype, "opened", null);
    MdSidenav = __decorate([
        core_5.Component({
            selector: 'md-sidenav',
            host: {
                '[class.md-style-side]': 'style=="side"',
                '[class.md-whiteframe-z2]': 'visible',
                '[class.md-sidenav-left]': 'align!="right"',
                '[class.md-sidenav-right]': 'align=="right"'
            },
            template: "<ng-content></ng-content>",
            directives: [backdrop_1.MdBackdrop]
        }),
        __param(1, core_8.Inject(core_7.forwardRef(function () { return sidenav_service_1.SidenavService; }))), 
        __metadata('design:paramtypes', [core_2.ElementRef, sidenav_service_1.SidenavService])
    ], MdSidenav);
    return MdSidenav;
})(backdrop_1.MdBackdrop);
exports.MdSidenav = MdSidenav;
var MdSidenavContainer = (function () {
    function MdSidenavContainer() {
        this._unsubscribe = null;
    }
    MdSidenavContainer.prototype.ngOnDestroy = function () {
        if (this._unsubscribe) {
            this._unsubscribe.unsubscribe();
            this._unsubscribe = null;
        }
    };
    MdSidenavContainer.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.children.toArray().forEach(function (m) {
            m.backdropRef = _this._backdrop;
        });
        this._unsubscribe = this._backdrop.onHiding.subscribe(function () {
            _this.children.toArray().forEach(function (m) {
                m.visible = false;
            });
        });
    };
    __decorate([
        core_3.ContentChildren(MdSidenav), 
        __metadata('design:type', core_4.QueryList)
    ], MdSidenavContainer.prototype, "children", void 0);
    __decorate([
        core_6.ViewChild(backdrop_1.MdBackdrop), 
        __metadata('design:type', backdrop_1.MdBackdrop)
    ], MdSidenavContainer.prototype, "_backdrop", void 0);
    MdSidenavContainer = __decorate([
        core_5.Component({
            selector: 'md-sidenav-container',
            template: "\n    <md-backdrop class=\"md-opaque\" clickClose=\"true\"></md-backdrop>\n    <ng-content></ng-content>",
            directives: [backdrop_1.MdBackdrop]
        }), 
        __metadata('design:paramtypes', [])
    ], MdSidenavContainer);
    return MdSidenavContainer;
})();
exports.MdSidenavContainer = MdSidenavContainer;
//# sourceMappingURL=sidenav.js.map