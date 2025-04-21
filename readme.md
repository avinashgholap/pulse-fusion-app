ionic build ----> creats www folder.
ionic capacitor add android ---> creates android folder.
npx cap sync android

goto android directory ---> cd android
run -----> gradlew.bat assembleDebug

build failed because ANDROID_HOME environment variable not found
create "local.properties" inside android folder
sdk.dir=D:\\android-sdk

ERROR: error occured for java 21
Solution: open "android/build.gradle" Find or add below section inside allprojects or buildscript:

subprojects {
afterEvaluate {
if (project.hasProperty("android")) {
android {
compileOptions {
sourceCompatibility JavaVersion.VERSION_17
targetCompatibility JavaVersion.VERSION_17
}
}
}
}
}

then in "android/app/build.gradle" make sure following code is there.

android {
compileOptions {
sourceCompatibility JavaVersion.VERSION_17
targetCompatibility JavaVersion.VERSION_17
}
}

then in "android/gradle.properties" make sure following code is there

org.gradle.java.home=C:\\Program Files\\Java\\jdk-17

cd android
./gradlew clean
./gradlew assembleDebug
