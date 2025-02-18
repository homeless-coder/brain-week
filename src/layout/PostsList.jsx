import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase"

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const fetchPosts = async () => {
//         const querySnapshot = await getDocs(collection(db, 'events'))
//         const eventsList = []
//         querySnapshot.forEach((doc) => {
//             eventsList.push({id: doc.id, ...doc.data()})
//         })
//         setPosts(eventsList)
//         setIsLoading(false)
//     }
//     fetchPosts()
//   }, [])

  return (
    <>
        <p style={{ textShadow: '0 0.9px 1.2px rgba(75, 74, 74, 0.9)' }} className="shadow-none font-monomakh tracking-wider mb-11 font-black text-[#f22323] text-3xl text-center w-full">
            Lista de eventos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {isLoading ? (
                <>
                    <div className="px-4 py-4 w-full rounded shadow-lg bg-white">
                        <div className="flex flex-col animate-pulse space-x-9">
                            <div className="w-full h-48 rounded bg-gray-200" />
                            <div className="flex-1 space-y-6 my-4">
                                <div className="h-6 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-6 rounded bg-gray-200" />
                                        <div className="col-span-1 h-6 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-6 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 w-full rounded shadow-lg bg-white">
                        <div className="flex flex-col animate-pulse space-x-9">
                            <div className="w-full h-48 rounded bg-gray-200" />
                            <div className="flex-1 space-y-6 my-4">
                                <div className="h-6 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-6 rounded bg-gray-200" />
                                        <div className="col-span-1 h-6 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-6 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:max-w-xs py-4 w-full rounded shadow-lg bg-white">
                        <div className="flex flex-col animate-pulse space-x-9">
                            <div className="w-full h-48 rounded bg-gray-200" />
                            <div className="flex-1 space-y-6 my-4">
                                <div className="h-6 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-6 rounded bg-gray-200" />
                                        <div className="col-span-1 h-6 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-6 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 w-full rounded shadow-lg bg-white">
                        <div className="flex flex-col animate-pulse space-x-9">
                            <div className="w-full h-48 rounded bg-gray-200" />
                            <div className="flex-1 space-y-6 my-4">
                                <div className="h-6 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-6 rounded bg-gray-200" />
                                        <div className="col-span-1 h-6 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-6 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 w-full rounded shadow-lg bg-white">
                        <div className="flex flex-col animate-pulse space-x-9">
                            <div className="w-full h-48 rounded bg-gray-200" />
                            <div className="flex-1 space-y-6 my-4">
                                <div className="h-6 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-6 rounded bg-gray-200" />
                                        <div className="col-span-1 h-6 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-6 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:max-w-xs py-4 w-full rounded shadow-lg bg-white">
                        <div className="flex flex-col animate-pulse space-x-9">
                            <div className="w-full h-48 rounded bg-gray-200" />
                            <div className="flex-1 space-y-6 my-4">
                                <div className="h-6 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-6 rounded bg-gray-200" />
                                        <div className="col-span-1 h-6 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-6 rounded bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={post.urlPoster} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{post.title}</div>
                            <p className="text-gray-700 text-base">
                                {post.description}
                            </p>
                            <a href={post.urlTerms} target="_blank" className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Ver reglamento
                            </a>
                            <a href={post.urlSubscription} target="_blank" className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Inscribirme
                            </a>
                        </div>
                    </div>
                ))
            )}
            </div>
          </>)}

export default PostsList;