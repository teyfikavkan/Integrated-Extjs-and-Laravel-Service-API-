<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\People;
use App\Http\Controllers\Controller;



class PeopleInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $peopleinfo=People::all();
        return response()->json($peopleinfo);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name' => 'required',
            'age' => 'required',
            'bio' => 'required'
        ]);
        if($validator->fails())
        {
            $response=array('response' => $validator->messages(), 'success' => false);
            return $response;
        }
        else{
            $peopleinfo=new People;
            $peopleinfo->name = $request->input('name');
            $peopleinfo->age = $request->input('age');
            $peopleinfo->bio = $request->input('bio');
            $peopleinfo->save();

            //return response()->json($peopleinfo);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $peopleid=People::find($id);
        return response()->json($peopleid);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator=Validator::make($request->all(),[
            'name' => 'required'
        ]);
        if($validator->fails())
        {
            $response=array('response' => $validator->messages(), 'success' => false);
            return $response;
        }
        else{
            $peopleinfo = People::find($id);
            $peopleinfo->name = $request->input('name');
            $peopleinfo->age = $request->input('age');
            $peopleinfo->bio = $request->input('bio');
            $peopleinfo->save();

            return response()->json($peopleinfo);

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $peopleinfo = People::find($id);
        $peopleinfo->delete();

        $response=array('response' => 'People Has Been Deleted', 'success' => true);
        return $response;
    }
}
