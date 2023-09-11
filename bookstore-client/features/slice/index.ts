

export const authenticateUser = (set: any) => ({
    isLoggedIn: false as boolean,
    userDetails: null as any,
    userBooks: [] as [],
    posted: false as boolean,

    setIsLoggedIn: (by: boolean) => {
        set(({ isLoggedIn: by }))
    },

    setUserDetails: (by: any) => {
        set(({ userDetails: by }))
    },


    setUserBooks: (by: []) => {
        set(({ userBooks: by }))
    },
    setPosted: (by: boolean) => {
        set(({ posted: by }))
    },

})




