<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src="/assets/Tk.svg" alt="logo vue" class="logo">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                :to='{name:"home"}'
                                class="nav-link"
                                aria-current="page"
                            >
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                :to='{name:"task-list"}'
                                class="nav-link"
                                aria-current="page"
                            >
                                My Tasks
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                :to='{name:"task-create"}'
                                class="nav-link"
                                aria-current="page"
                            >
                                New Task
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a
                                href="/dashboard"
                                class="nav-link"
                            >
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <div>
            <router-view></router-view>
        </div>
    </main>
</template>
