'use client'

import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {

    const {data: session} = useSession();

    return (
        <>
            {session?.user ? (
                <>
                    {session?.user?.image && (
                        <Image src={session.user.image} alt="user.avatar"
                               width={32} height={32}
                               className="rounded-full"
                        />
                    )}
                    {session.user.name && (
                        <span>{session.user.name}</span>
                        )}
                    <button onClick={() =>signOut()}>
                        Déconnexion
                    </button>
                </>
                ): (
                <Link href="/login">
                    <button>Connexion</button>
                </Link>
                )}
        </>
    )
}
