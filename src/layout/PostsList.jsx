import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase"
import { matchSorter } from 'match-sorter'
import { Lightbox } from "react-modal-image";


const PostsList = ({ searchValue }) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
        const querySnapshot = await getDocs(collection(db, 'events'))
        const eventsList = []
        querySnapshot.forEach((doc) => {
            eventsList.push({id: doc.id, ...doc.data()})
        })
        setPosts(eventsList)
        setIsLoading(false)
    }
    fetchPosts()
  }, [])

const getPosts = () => matchSorter(posts, searchValue, {keys: ['title']})

  return (
    <>
        <p style={{ textShadow: '0 0.9px 1.2px rgba(75, 74, 74, 0.9)' }} className="shadow-none font-monomakh tracking-wider font-black text-[#f22323] text-3xl text-center w-full">
            Lista de eventos
        </p>
            {
            isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-11">
                    <div className="p-4 w-full rounded shadow-lg bg-white">
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
                </div>
            ) : (
                getPosts().length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-11">
                        {
                            getPosts().map((post) => (
                                <div key={post.title} className="p-4 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                                    <img 
                                        className="hover:brightness-80 object-bottom transform ease-in-out rounded-[8px] w-full h-48 object-cover bg-bottom cursor-pointer" 
                                        onClick={() => {
                                            setSelectedImage(post.urlPoster)
                                            setShowPreview(true)
                                        }} 
                                        src={post.urlPoster} 
                                    />
                                    <div className="flex flex-col pt-4 gap-2">
                                        <p className="font-bold text-lg">{post.title}</p>
                                        <p className="text-gray-700 text-base">
                                            {post.description}
                                        </p>
                                        <div className='flex justify-end gap-4 mt-3'>
                                            <a href={post.urlTerms} target="_blank" className="px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                                Ver reglamento
                                            </a>
                                            <a href={post.urlSubscription} target="_blank" className="inline-flex bg-action-button items-center px-4 py-3 text-sm font-bold text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-800 hover:brightness-90">
                                                Inscribirme
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                         }
                    </div>
                ) : (
                    <div className='flex flex-col text-center justify-center my-20'>
                        <p style={{ textShadow: '0 2.1px 3.1px rgba(0, 0, 0, 0.30)' }} className="shadow-none font-monomakh tracking-widest mb-1.5 text-8xl lg:text-4xl font-black tracking-tight leading-none text-gray-800">{`(｡•́︿•̀｡)`}</p>
                        <p style={{ textShadow: '0 2.1px 3.1px rgba(0, 0, 0, 0.30)' }} className="shadow-none font-monomakh tracking-widest mb-1.5 text-2xl lg:text-4xl font-black tracking-tight leading-none text-gray-800 mt-10">Lo que sea que hayas escrito, solo existe en tu imaginación...</p>
                    </div>
                )
            )}
            {
                showPreview && (
                    <Lightbox
                    medium={selectedImage}
                    large={selectedImage}
                    alt="Vista completa"
                    onClose={() => setShowPreview(false)}
                />
                )
            }
          </>
          )}

export default PostsList;