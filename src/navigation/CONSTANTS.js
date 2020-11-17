export default Object.freeze({
    HOME: {
        name: 'Home',
        route: '/',
        subroutes: {
            SIGNUP: {
                name: 'Sign up',
                route: '/sign-up'
            },
            DASHBOARD: {
                name: 'Dashboard',
                route: '/dashboard'
            }
        }
    },
    // PROFILE: {
    //     name: 'Profile',
    //     route: '/me',
    //     subroutes: {
    //         SETTINGS: {
    //             name: 'Settings',
    //             route: '/me/settings'
    //         }
    //     }
    // },
    PAGE1: {
        name: 'Page1',
        route: '/page1'
    }
});