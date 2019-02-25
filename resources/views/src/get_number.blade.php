@extends('layouts.app')
    <link rel="stylesheet" href="{{url('')}}/css/number.css?v=2.0.1">

@section('content')


        <div class="col-sm-6">
            <div class="form">
                <h5>Give Away Tool
                    <svg class="svg-inline--fa fa-gift fa-w-16" aria-hidden="true" data-prefix="far" data-icon="gift"
                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M464 144h-26.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H48c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h16v107.4c0 29 23.6 52.6 52.6 52.6h342.8c29 0 52.6-23.6 52.6-52.6V336h16c8.8 0 16-7.2 16-16V192c0-26.5-21.5-48-48-48zM232 448H84.6c-2.5 0-4.6-2-4.6-4.6V336h112v-48H48v-96h184v256zm-78.1-304c-22.1 0-40-17.9-40-40s17.9-40 40-40c22 0 37.5 7.6 84.1 77l2 3h-86.1zm122-3C322.5 71.6 338 64 360 64c22.1 0 40 17.9 40 40s-17.9 40-40 40h-86.1l2-3zM464 288H320v48h112v107.4c0 2.5-2 4.6-4.6 4.6H280V192h184v96z"></path>
                    </svg><!-- <i class="far fa-gift"></i> --></h5>
                <br>
                
                <div class="form-group"><label  class="bmd-label-floating" for="exampleInputEmail1">ID Bài Viết </label> <input type="number"
                                                                                                    id="exampleInputEmail1"
                                                                                                    placeholder=""
                                                                                                    class="form-control">
                </div>
                <div class="form-group"><label class="bmd-label-floating" for="exampleInputPassword1">Access Token</label> <input type="password"
                                                                                                       id="exampleInputPassword1"
                                                                                                       class="form-control">
                </div>
                <div class="form-group"><label class="bmd-label-floating" for="exampleInputEmail1">Số Min</label> <input type="number"
                                                                                              id="exampleInputEmail1"
                                                                                              placeholder=""
                                                                                              class="form-control">
                </div>
                <div class="form-group"><label class="bmd-label-floating" for="exampleInputEmail1">Số Max</label> <input type="number"
                                                                                              id="exampleInputEmail1"
                                                                                              placeholder=""
                                                                                              class="form-control">
                </div>
                <div class="custom-control custom-switch"><input type="checkbox" id="customSwitch1"
                                                                 class="custom-control-input"> <label
                            for="customSwitch1" class="custom-control-label">Tự động tìm
                        <svg data-toggle="tooltip" title="" class="svg-inline--fa fa-info-circle fa-w-16"
                             aria-labelledby="svg-inline--fa-title-arW9foWnJLkS" data-prefix="fal"
                             data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             data-fa-i2svg=""
                             data-original-title="Chức năng này sẽ giúp bạn tự động tìm cho tới khi bình luận có số may mắn trùng với số may mắn của hệ thống thì dừng lại ( Delay 3s )">
                            <title id="svg-inline--fa-title-arW9foWnJLkS">Chức năng này sẽ giúp bạn tự động tìm cho tới
                                khi bình luận có số may mắn trùng với số may mắn của hệ thống thì dừng lại ( Delay 3s
                                )</title>
                            <path fill="currentColor"
                                  d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path>
                        </svg>
                        <!-- <i data-toggle="tooltip" title="Chức năng này sẽ giúp bạn tự động tìm cho tới khi bình luận có số may mắn trùng với số may mắn của hệ thống thì dừng lại ( Delay 3s )" class="fal fa-info-circle"></i> -->
                    </label></div>
                <br>
                <button type="submit" class="btn btn-dark">Submit</button>
                <br><br>
                <p>
                    <small>Coded with all the
                        <svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" data-prefix="fa"
                             data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             data-fa-i2svg="">
                            <path fill="currentColor"
                                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                        </svg><!-- <i class="fa fa-heart"></i> --> by <a target="_blank"
                                                                         href="https://www.facebook.com/sven307">Sven</a>
                    </small>
                </p>
            </div>
        </div>
        <div class="col-sm-6">
            <h5>Data Response
                <svg class="svg-inline--fa fa-database fa-w-14" aria-hidden="true" data-prefix="fal"
                     data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     data-fa-i2svg="">
                    <path fill="currentColor"
                          d="M224 32c106 0 192 28.75 192 64v32c0 35.25-86 64-192 64S32 163.25 32 128V96c0-35.25 86-64 192-64m192 149.5V224c0 35.25-86 64-192 64S32 259.25 32 224v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5m0 96V320c0 35.25-86 64-192 64S32 355.25 32 320v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5m0 96V416c0 35.25-86 64-192 64S32 451.25 32 416v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5M224 0C145.858 0 0 18.801 0 96v320c0 77.338 146.096 96 224 96 78.142 0 224-18.801 224-96V96c0-77.338-146.096-96-224-96z"></path>
                </svg><!-- <i class="fal fa-database"></i> --></h5>
            <br> <!----> <p>Số may mắn : <strong>0</strong></p>
            <div class="data-list"></div>
            <p></p>
            <h5>Clipboard
                <svg class="svg-inline--fa fa-clone fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="clone"
                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor"
                          d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"></path>
                </svg><!-- <i class="fas fa-clone"></i> --></h5>
            <p></p>
            <div class="data-list"></div>
        </div>
@endsection

@section('footer')
    <script src="{{url('')}}/js/fbtoken.js"></script>

@endsection
