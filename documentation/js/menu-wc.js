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
                    <a href="index.html" data-type="index-link">kng15 documentation</a>
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
                                            'data-target="#components-links-module-AdminModule-39d88e2380141387bb6ec16e61112b33ccb4eaced1329b8762c2e562ddc52df395ad9e3ae911b57cfe507cce87281b470a72286ff3fe1f9d5cc0f2f800978f9a"' : 'data-target="#xs-components-links-module-AdminModule-39d88e2380141387bb6ec16e61112b33ccb4eaced1329b8762c2e562ddc52df395ad9e3ae911b57cfe507cce87281b470a72286ff3fe1f9d5cc0f2f800978f9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-39d88e2380141387bb6ec16e61112b33ccb4eaced1329b8762c2e562ddc52df395ad9e3ae911b57cfe507cce87281b470a72286ff3fe1f9d5cc0f2f800978f9a"' :
                                            'id="xs-components-links-module-AdminModule-39d88e2380141387bb6ec16e61112b33ccb4eaced1329b8762c2e562ddc52df395ad9e3ae911b57cfe507cce87281b470a72286ff3fe1f9d5cc0f2f800978f9a"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0380eb99dc933726a298e8346c6bccd22e1b5cc04b104327b1338c34576989e47a18332184e6619667ea44cdcc8415094943c57e1610f717c21a145170f5c250"' : 'data-target="#xs-components-links-module-AppModule-0380eb99dc933726a298e8346c6bccd22e1b5cc04b104327b1338c34576989e47a18332184e6619667ea44cdcc8415094943c57e1610f717c21a145170f5c250"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0380eb99dc933726a298e8346c6bccd22e1b5cc04b104327b1338c34576989e47a18332184e6619667ea44cdcc8415094943c57e1610f717c21a145170f5c250"' :
                                            'id="xs-components-links-module-AppModule-0380eb99dc933726a298e8346c6bccd22e1b5cc04b104327b1338c34576989e47a18332184e6619667ea44cdcc8415094943c57e1610f717c21a145170f5c250"' }>
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
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-c55a2ef034501807d3c592a90a7f95fe929a5ad76636c9c368b0e3a4033ea80097675f8ac7598f91ed7e59ff2188bceaf133eab3f2ce7d3ebd9863c883000c9c"' : 'data-target="#xs-components-links-module-PublicModule-c55a2ef034501807d3c592a90a7f95fe929a5ad76636c9c368b0e3a4033ea80097675f8ac7598f91ed7e59ff2188bceaf133eab3f2ce7d3ebd9863c883000c9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-c55a2ef034501807d3c592a90a7f95fe929a5ad76636c9c368b0e3a4033ea80097675f8ac7598f91ed7e59ff2188bceaf133eab3f2ce7d3ebd9863c883000c9c"' :
                                            'id="xs-components-links-module-PublicModule-c55a2ef034501807d3c592a90a7f95fe929a5ad76636c9c368b0e3a4033ea80097675f8ac7598f91ed7e59ff2188bceaf133eab3f2ce7d3ebd9863c883000c9c"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
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