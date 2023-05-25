import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"


function User({ user }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: user.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}

            className="flex items-center gap-4 bg-slate-600 rounded-xl p-6 m-2 dark:bg-slate-700"
        >
            <img className="w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1685055638~exp=1685056238~hmac=c8af0f002db5ecdffcfac9b1dd8f678316eccc4702eb8e462288bd1f2c9ee716" alt="" width="100" height="100" />
            <span>
                <h2 className="text-white text-xl font-bold">{user.name}</h2>
                <p className="text-white">Email: {user.email}</p>
            </span>
        </div>
    )
}

export default User