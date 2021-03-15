interface RequireContext {
    keys(): string[]
    (id:string) : any
    <T>(id: string): T
    resolve(id:string): string
    id: string
}
const requireAll = (requireContext: RequireContext):unknown[] => requireContext.keys().map(requireContext)

const svgs = require.context('./svg', false, /\.svg$/)

requireAll(svgs)

export default requireAll
