const { create } = require('zustand')


const useStore = create((set: any) => ({
    userid: null,
    setUserId: (upd: string) => set(() => ({ userid: upd }))
}))


export default useStore