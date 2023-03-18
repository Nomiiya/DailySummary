import { supabase } from '../../../lib/supabaseClient';
import React from 'react';

function Page({users}:any) {
  return (
    <ul>
      {users?.map((user:any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const {data} = await supabase.from('testUsers').select("*")

  return {
    props: {
     users: data
    },
  }
}


export default Page;