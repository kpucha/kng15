'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">kpucha.dev - docs</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-8e351e95f8671606061123fb2cf6045c9090ce01cefb67f22475a32675df77ec60fc1546c532436c9695560afb943000a406ef1a96bca9bf68d05ba29356589d"' : 'data-target="#xs-components-links-module-AdminModule-8e351e95f8671606061123fb2cf6045c9090ce01cefb67f22475a32675df77ec60fc1546c532436c9695560afb943000a406ef1a96bca9bf68d05ba29356589d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-8e351e95f8671606061123fb2cf6045c9090ce01cefb67f22475a32675df77ec60fc1546c532436c9695560afb943000a406ef1a96bca9bf68d05ba29356589d"' :
                                            'id="xs-components-links-module-AdminModule-8e351e95f8671606061123fb2cf6045c9090ce01cefb67f22475a32675df77ec60fc1546c532436c9695560afb943000a406ef1a96bca9bf68d05ba29356589d"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPostPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditPostPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmbedGithubComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmbedGithubComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdsModule.html" data-type="entity-link" >AdsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdsModule-ddc2ddebcdcc021f394d05f68889444792a4cbe9795548fa93edcd1bfa884d4d0b38f58326286488da3efdeab207ffbe4784b1fb610b0a27dc685c774348b964"' : 'data-target="#xs-components-links-module-AdsModule-ddc2ddebcdcc021f394d05f68889444792a4cbe9795548fa93edcd1bfa884d4d0b38f58326286488da3efdeab207ffbe4784b1fb610b0a27dc685c774348b964"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdsModule-ddc2ddebcdcc021f394d05f68889444792a4cbe9795548fa93edcd1bfa884d4d0b38f58326286488da3efdeab207ffbe4784b1fb610b0a27dc685c774348b964"' :
                                            'id="xs-components-links-module-AdsModule-ddc2ddebcdcc021f394d05f68889444792a4cbe9795548fa93edcd1bfa884d4d0b38f58326286488da3efdeab207ffbe4784b1fb610b0a27dc685c774348b964"' }>
                                            <li class="link">
                                                <a href="components/AdsHorizontalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsHorizontalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdsSkyscraperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsSkyscraperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c88f9a9f7fc3ffa03dfa73fff615560d0c4186c50ecfb7a02c35c9fd539bb128234e85f39621903ad78f192aee0e1b093624a057e7f4be9f74d4e6524235f73f"' : 'data-target="#xs-components-links-module-AppModule-c88f9a9f7fc3ffa03dfa73fff615560d0c4186c50ecfb7a02c35c9fd539bb128234e85f39621903ad78f192aee0e1b093624a057e7f4be9f74d4e6524235f73f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c88f9a9f7fc3ffa03dfa73fff615560d0c4186c50ecfb7a02c35c9fd539bb128234e85f39621903ad78f192aee0e1b093624a057e7f4be9f74d4e6524235f73f"' :
                                            'id="xs-components-links-module-AppModule-c88f9a9f7fc3ffa03dfa73fff615560d0c4186c50ecfb7a02c35c9fd539bb128234e85f39621903ad78f192aee0e1b093624a057e7f4be9f74d4e6524235f73f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-04360f188dda5ed5d2d99d20b9344bb44d0d7ed95667adb756a794cebe9eba603a8c4dcf850bebd0b9e9995407de66fc962a073396848e495a457821f384c4dc"' : 'data-target="#xs-components-links-module-AuthModule-04360f188dda5ed5d2d99d20b9344bb44d0d7ed95667adb756a794cebe9eba603a8c4dcf850bebd0b9e9995407de66fc962a073396848e495a457821f384c4dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-04360f188dda5ed5d2d99d20b9344bb44d0d7ed95667adb756a794cebe9eba603a8c4dcf850bebd0b9e9995407de66fc962a073396848e495a457821f384c4dc"' :
                                            'id="xs-components-links-module-AuthModule-04360f188dda5ed5d2d99d20b9344bb44d0d7ed95667adb756a794cebe9eba603a8c4dcf850bebd0b9e9995407de66fc962a073396848e495a457821f384c4dc"' }>
                                            <li class="link">
                                                <a href="components/SignComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-8c026119cede2d32cd602946344a91e5637974e0606c791423032dc6229d5be004fa49a10490a7fe653e58bed03710f241c1fcec9b4357564310eba1fcb1649b"' : 'data-target="#xs-components-links-module-BlogModule-8c026119cede2d32cd602946344a91e5637974e0606c791423032dc6229d5be004fa49a10490a7fe653e58bed03710f241c1fcec9b4357564310eba1fcb1649b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-8c026119cede2d32cd602946344a91e5637974e0606c791423032dc6229d5be004fa49a10490a7fe653e58bed03710f241c1fcec9b4357564310eba1fcb1649b"' :
                                            'id="xs-components-links-module-BlogModule-8c026119cede2d32cd602946344a91e5637974e0606c791423032dc6229d5be004fa49a10490a7fe653e58bed03710f241c1fcec9b4357564310eba1fcb1649b"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditPostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewPostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogRoutingModule.html" data-type="entity-link" >BlogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-6a0ffe03abfd825d336fb38d2a426614afd6a3f8c1df44d5eef071378bd9b4db57b654d0c1235420f86aab36d439a7a23cb1727178a43d43aa47772b5fb36c98"' : 'data-target="#xs-components-links-module-LayoutModule-6a0ffe03abfd825d336fb38d2a426614afd6a3f8c1df44d5eef071378bd9b4db57b654d0c1235420f86aab36d439a7a23cb1727178a43d43aa47772b5fb36c98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-6a0ffe03abfd825d336fb38d2a426614afd6a3f8c1df44d5eef071378bd9b4db57b654d0c1235420f86aab36d439a7a23cb1727178a43d43aa47772b5fb36c98"' :
                                            'id="xs-components-links-module-LayoutModule-6a0ffe03abfd825d336fb38d2a426614afd6a3f8c1df44d5eef071378bd9b4db57b654d0c1235420f86aab36d439a7a23cb1727178a43d43aa47772b5fb36c98"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavSecondaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavSecondaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-7b577ddd76565093bf71fcce045bd8548f41759057bf2645fb996027144ad09729041389710087655b188538b7659a1c9748e5899f7b2c7f255b4952df487e5b"' : 'data-target="#xs-components-links-module-PublicModule-7b577ddd76565093bf71fcce045bd8548f41759057bf2645fb996027144ad09729041389710087655b188538b7659a1c9748e5899f7b2c7f255b4952df487e5b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-7b577ddd76565093bf71fcce045bd8548f41759057bf2645fb996027144ad09729041389710087655b188538b7659a1c9748e5899f7b2c7f255b4952df487e5b"' :
                                            'id="xs-components-links-module-PublicModule-7b577ddd76565093bf71fcce045bd8548f41759057bf2645fb996027144ad09729041389710087655b188538b7659a1c9748e5899f7b2c7f255b4952df487e5b"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrainTagsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrainTagsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CookiesPolicyPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CookiesPolicyPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GitgraphCvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GitgraphCvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyPolicyPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyHistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyHistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkHistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkHistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-2a43bb8d17f184d6a2c13fe7cc4b3a74af2a7992b120834aff1d3070d197895cca6b15d18f7fd205120b2fe6ad5d9f53f22296cba07e9c6c8705a35de6123ff0"' : 'data-target="#xs-components-links-module-SharedModule-2a43bb8d17f184d6a2c13fe7cc4b3a74af2a7992b120834aff1d3070d197895cca6b15d18f7fd205120b2fe6ad5d9f53f22296cba07e9c6c8705a35de6123ff0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2a43bb8d17f184d6a2c13fe7cc4b3a74af2a7992b120834aff1d3070d197895cca6b15d18f7fd205120b2fe6ad5d9f53f22296cba07e9c6c8705a35de6123ff0"' :
                                            'id="xs-components-links-module-SharedModule-2a43bb8d17f184d6a2c13fe7cc4b3a74af2a7992b120834aff1d3070d197895cca6b15d18f7fd205120b2fe6ad5d9f53f22296cba07e9c6c8705a35de6123ff0"' }>
                                            <li class="link">
                                                <a href="components/ActionButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LangSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LangSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostInfoCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostInfoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SwitchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SwitchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/V2Module.html" data-type="entity-link" >V2Module</a>
                            </li>
                            <li class="link">
                                <a href="modules/V2RoutingModule.html" data-type="entity-link" >V2RoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MENU.html" data-type="entity-link" >MENU</a>
                            </li>
                            <li class="link">
                                <a href="classes/POST.html" data-type="entity-link" >POST</a>
                            </li>
                            <li class="link">
                                <a href="classes/STUDY.html" data-type="entity-link" >STUDY</a>
                            </li>
                            <li class="link">
                                <a href="classes/WORK.html" data-type="entity-link" >WORK</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/I18nService.html" data-type="entity-link" >I18nService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LayoutService.html" data-type="entity-link" >LayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PwaService.html" data-type="entity-link" >PwaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IsAdminGuard.html" data-type="entity-link" >IsAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsLoggedGuard.html" data-type="entity-link" >IsLoggedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NotLoggedGuard.html" data-type="entity-link" >NotLoggedGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CreatePostForm.html" data-type="entity-link" >CreatePostForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LayoutSize.html" data-type="entity-link" >LayoutSize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Section.html" data-type="entity-link" >Section</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Study.html" data-type="entity-link" >Study</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tile.html" data-type="entity-link" >Tile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Work.html" data-type="entity-link" >Work</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});