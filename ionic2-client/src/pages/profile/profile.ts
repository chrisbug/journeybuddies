
import { Observable } from 'rxjs/Observable';
import { User } from './../../_models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  getGroups: Observable<any>;
  id = '';
  user: User;
  currentGroup: string;
  currentGroupId: string;
  token: string
  imageURI: any;
  imageFileName: any;
  public image: string;
  uploadImage: Observable<any>;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.CAMERA,
    encodingType: this.camera.EncodingType.JPEG,
    targetWidth: 500,
    targetHeight: 500,
    saveToPhotoAlbum: true
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera,
    public http: HttpClient,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ngOnInit() {
    this.id = this.navParams.data[0]._id;
    this.user = this.navParams.data[0];
    this.token = this.navParams.data[1];
    if (this.user.groups.length > 0) {
      this.currentGroup = this.user.groups[0].name;
      this.currentGroupId = this.user.groups[0]._id
    } else {
      this.currentGroup = 'Sorry you have no groups';
    }
  }

  onSetGroup(group: any) {
    this.currentGroup = group.name;
    this.currentGroupId = group._id;
  }

  checkActiveGroup(name: string, id: string) {
    if ((name === this.currentGroup) && (id === this.currentGroupId)) {
      return true;
    }
    return false;
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  //function for uploading image to server
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "uploading..."
    });

    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'image',
      fileName: this.currentGroupId,
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      headers: {
        'token': this.token,
        'groupid': this.currentGroupId,
        '_id': this.id
      }
    }

    fileTransfer.upload(this.imageURI, 'http://52.50.230.227:80/api/mobileimageupload', options)
      .then((data) => {
        console.log(data + " Uploaded successfully");
        //this.imageFileName = 'http://52.50.230.227:80/api/uploadimage/'+this.currentGroupId+'/'+JSON.stringify(Date.now())+".jpg";
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      }
      );
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
  onUpload() {
    const timeStamp = JSON.stringify(Date.now());
    this.uploadImage = this.http.post('http://52.50.230.227:80/api/uploadimage',
      { _id: this.id, token: this.token, myFile: this.imageURI, originalname: timeStamp, groupid: this.currentGroupId });
    this.uploadImage.subscribe(data => {
      console.log(data);
      this.imageURI = '';
      this.imageFileName = '';
    }, (err) => {
      console.log(err);
    })

  }

}
